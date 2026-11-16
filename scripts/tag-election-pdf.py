"""Repair semantic reading order in the existing English election PDF.

Requires pypdf 6.21.x. This targets the checked source revision, fails closed if
its layout changes, and preserves every existing drawing/text operation. It
adds headings, table headers, reading order and link associations. It does not
claim PDF/UA conformance. Run with ORIGINAL.pdf OUTPUT.pdf.
"""
from collections import defaultdict
from hashlib import sha256
from pathlib import Path
import sys
from pypdf import PdfReader, PdfWriter
from pypdf._cmap import get_encoding
from pypdf.generic import (
    ArrayObject, BooleanObject, ByteStringObject, ContentStream,
    DictionaryObject, NameObject, NumberObject, TextStringObject,
)

SOURCE_SHA = 'dc3b20f90d7b4f10590ee376b01aa4b6a50ab54f34c97d8bebc8a625724cae6f'
source, output = map(Path, sys.argv[1:])
assert sha256(source.read_bytes()).hexdigest() == SOURCE_SHA, 'Unexpected source PDF'
reader = PdfReader(source)
writer = PdfWriter(clone_from=reader)
assert len(writer.pages) == 4


def dictionary(**values):
    return DictionaryObject({NameObject('/' + k): v for k, v in values.items()})


def name(value):
    return NameObject('/' + value)


struct = dictionary(Type=name('StructTreeRoot'))
struct_ref = writer._add_object(struct)
parent_entries = {}
next_parent_key = len(writer.pages)


def element(role, parent, page=None, attributes=None):
    obj = dictionary(Type=name('StructElem'), S=name(role), P=parent, K=ArrayObject())
    if page is not None:
        obj[name('Pg')] = page.indirect_reference
    if attributes:
        obj[name('A')] = attributes
    ref = writer._add_object(obj)
    parent.get_object()['/K'].append(ref)
    return ref


struct[name('K')] = ArrayObject()
doc = element('Document', struct_ref)
readback = []

for pn, page in enumerate(writer.pages):
    stream = ContentStream(page.get_contents(), writer)
    fonts = {n: get_encoding(f.get_object()) for n, f in page['/Resources']['/Font'].items()}
    items = []
    block = -1
    font = None
    x = y = 0.0
    for idx, (args, op) in enumerate(stream.operations):
        if op == b'BT':
            block += 1
        elif op == b'Tf':
            font = args[0]
        elif op == b'Tm':
            x, y = float(args[4]), float(args[5])
        elif op == b'TJ':
            encoding, cmap = fonts[font]
            text = ''
            for value in args[0]:
                if isinstance(value, (TextStringObject, ByteStringObject)):
                    data = value.original_bytes if isinstance(value, TextStringObject) else value
                    decoded = data.decode(encoding) if isinstance(encoding, str) else ''.join(encoding[c] for c in data)
                    text += ''.join(cmap.get(c, c) for c in decoded)
            items.append(dict(idx=idx, block=block, x=x, y=y, text=text))
        elif op in (b'Tj', b"'", b'"'):
            raise AssertionError('Unexpected text operator')
    by_block = defaultdict(list)
    for item in items:
        by_block[item['block']].append(item)
    section = element('Sect', doc)
    mapping = {}
    parent_array = ArrayObject()
    page_order = []

    def select(*blocks):
        return [item for b in blocks for item in by_block[b]]

    def leaf(role, selected, parent=section, scope=None, annotation=None):
        attrs = dictionary(O=name('Table'), Scope=name(scope)) if scope else None
        ref = element(role, parent, page, attrs)
        for item in selected:
            assert item['idx'] not in mapping
            mcid = len(parent_array)
            parent_array.append(ref)
            mapping[item['idx']] = mcid
            ref.get_object()['/K'].append(NumberObject(mcid))
            page_order.append(item['text'])
        if annotation is not None:
            global next_parent_key
            annot = page['/Annots'][annotation]
            annot.get_object()[name('StructParent')] = NumberObject(next_parent_key)
            parent_entries[next_parent_key] = ref
            next_parent_key += 1
            ref.get_object()['/K'].append(dictionary(Type=name('OBJR'), Obj=annot, Pg=page.indirect_reference))
            annot.get_object()[name('Contents')] = TextStringObject(' '.join(i['text'] for i in selected))
        return ref

    def paragraph(*blocks, role='P', annotation=None):
        return leaf(role, select(*blocks), annotation=annotation)

    def table(header_block, body_blocks, expected_rows, body_limit=None):
        table_ref = element('Table', section, page)
        header = select(header_block)
        columns = sorted({round(i['x'], 2) for i in header})
        header_row = element('TR', table_ref, page)
        for col, start in enumerate(columns):
            cell = [i for i in header if abs(i['x'] - start) < 0.02]
            leaf('TH', cell, header_row, scope='Column')
        body = select(*body_blocks)
        if body_limit:
            body = [i for i in body if i['y'] < body_limit]
        rows = []
        for item in body:
            if not rows or abs(rows[-1][0]['y'] - item['y']) > 1:
                rows.append([])
            rows[-1].append(item)
        assert len(rows) == expected_rows, (pn, len(rows))
        for row in rows:
            row_ref = element('TR', table_ref, page)
            cells = [[] for _ in columns]
            for item in row:
                col = max(c for c, start in enumerate(columns) if item['x'] >= start - 0.02)
                cells[col].append(item)
            assert all(cells), (pn, row)
            for col, cell in enumerate(cells):
                leaf('TH' if col == 0 else 'TD', cell, row_ref, scope='Row' if col == 0 else None)

    if pn == 0:
        assert select(0)[0]['text'] == '2026 British Columbia provincial election'
        paragraph(0, role='H1')
        paragraph(1)
        paragraph(26)
        for blocks in [(2, 3, 4), (5, 6, 7), (8, 9, 10), (11, 12), (13, 14), (15, 16)]:
            paragraph(*blocks)
        paragraph(17, role='H2')
        paragraph(18)
        table(19, [20], 3)
        paragraph(21, role='H2')
        paragraph(22)
        paragraph(27, role='H2')
        paragraph(28, 29)
        artifacts = {23, 24, 25}
    elif pn == 1:
        paragraph(0, role='H2')
        table(1, [2, 3, 4, 5, 6], 10)
        paragraph(11, role='H3')
        paragraph(12, 13, role='Link', annotation=0)
        paragraph(14, role='Link', annotation=1)
        paragraph(15, role='H3')
        paragraph(16)
        paragraph(17)
        paragraph(18)
        paragraph(7)
        artifacts = {8, 9, 10}
    elif pn == 2:
        paragraph(0, role='H2')
        paragraph(1)
        table(2, [3], 9, body_limit=590)
        leaf('P', [i for i in select(3) if i['y'] >= 590])
        paragraph(4, role='H3')
        paragraph(5)
        artifacts = {6, 7, 8}
    else:
        paragraph(0, role='H2')
        paragraph(1)
        table(2, [3], 17)
        paragraph(4, role='H3')
        paragraph(5)
        links = select(6)
        assert len(links) == 6
        for n in range(3):
            leaf('Link', links[2*n:2*n+2], annotation=n)
        artifacts = {7, 8, 9}

    assert set(mapping) == {i['idx'] for i in items if i['block'] not in artifacts}, 'Unassigned meaningful text'
    parent_entries[pn] = parent_array
    page[name('StructParents')] = NumberObject(pn)
    page[name('Tabs')] = name('S')
    operations = []
    # All drawing segments are decorative. Text has its own semantic sequence.
    operations.append(([name('Artifact')], b'BMC'))
    for idx, (args, op) in enumerate(stream.operations):
        if op == b'BT':
            operations.append(([], b'EMC'))
        if op == b'TJ':
            if idx in mapping:
                operations.append(([name('Span'), dictionary(MCID=NumberObject(mapping[idx]))], b'BDC'))
            else:
                operations.append(([name('Artifact')], b'BMC'))
            operations.append((args, op))
            operations.append(([], b'EMC'))
        else:
            operations.append((args, op))
        if op == b'ET':
            operations.append(([name('Artifact')], b'BMC'))
    operations.append(([], b'EMC'))
    stream.operations = operations
    page.replace_contents(stream)
    readback.append(page_order)

nums = ArrayObject()
for key in sorted(parent_entries):
    nums.extend([NumberObject(key), parent_entries[key]])
struct[name('ParentTree')] = writer._add_object(dictionary(Nums=nums))
struct[name('ParentTreeNextKey')] = NumberObject(next_parent_key)
writer.root_object[name('StructTreeRoot')] = struct_ref
writer.root_object[name('MarkInfo')] = dictionary(Marked=BooleanObject(True))
writer.root_object[name('Lang')] = TextStringObject('en-CA')
writer.root_object[name('ViewerPreferences')] = dictionary(DisplayDocTitle=BooleanObject(True))
writer.write(output)

# Verify that tagging did not change the rendered-text source or page count.
checked = PdfReader(output)
assert len(checked.pages) == len(reader.pages)
assert all(a.extract_text() == b.extract_text() for a, b in zip(reader.pages, checked.pages))
positions = [readback[0].index(text) for text in ['64', '27', '2', '52.17%']]
assert positions == sorted(positions)
assert checked.trailer['/Root']['/MarkInfo']['/Marked']
print('Tagged 4 pages, 4 tables, 5 links; source text unchanged.')
