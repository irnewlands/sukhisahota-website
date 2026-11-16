# Accessibility changes — November 15, 2026

## Restore point

Before these changes, GitHub branch `backup/pre-accessibility-2026-11-15` was created at commit `068442aefc1aa4a57c82e5ed2af5602f575d99e4` in `irnewlands/sukhisahota-website`. It includes the November 9 election downloads and the Renewal report updates.

To undo this accessibility release, revert its commit on `main` and push the revert. This preserves history and lets the existing Cloudflare Pages deployment rebuild. Do not reset or force-push `main`. The backup branch also provides a permanent comparison point.

## Changes

- Dark orange (`#a83b00`) for white button text and orange text on light backgrounds; a lighter orange for small accents on dark backgrounds. White on dark orange is approximately 6.38:1; dark orange on the secondary-page cream is approximately 5.69:1.
- Persistent, associated first-name, last-name and email labels, with translated required-field indicators in English, French, Punjabi, Simplified Chinese and Tagalog.
- A translated first-tab skip link and one focusable `main-content` target on every page, including error pages.
- A dark-and-white keyboard focus indicator, scroll clearance beneath headers, immediate visibility of focused reveal sections, and reduced-motion handling for reveal effects.
- Signup feedback exposed as a polite status message. The former timer-based assertion of success now asks visitors to check for a subscription confirmation; it does not verify provider acceptance.

## Verified locally

- TypeScript check and production build.
- First Tab reveals the skip link; Enter focuses `main-content`; next Tab reaches the first main-content link.
- One main landmark and skip target on the homepage, About, both autobiography components, Election 2025, Renewal, Issues, an issue detail, Get Involved, BC election reflections, help directory and 404 page.
- Associated required-field labels in all five languages.
- Empty signup and malformed-email submissions focus the appropriate invalid field without sending a valid signup.
- Language menu opens with Enter and French selection navigates to the matching translated page.
- Mobile menu opens/closes using Enter. Directory filter updates the live result count.
- Election embeds retain descriptive titles and separate links to open their forms.

## Remaining manual checks

These are not claimed as passed:

- NVDA on Windows and VoiceOver on Apple devices: read heading/landmark lists, skip navigation, names/required states, menu states, filter announcements and signup status.
- A real signup with a consenting test recipient, including MailerLite acceptance, confirmation email and delivery failures. No real subscriber was added during these checks.
- Completion and submission of the external Google Forms; password-protected questionnaire flows with test credentials.
- PDF tags, reading order and table accessibility; spreadsheet reading order and navigation.
- Actual 200%/400% browser zoom and text-spacing testing on the target devices. Browser zoom shortcuts did not alter the cloud test viewport, so this was not treated as a passing zoom test.

This is a focused improvement pass, not a WCAG conformance certification.


## User-assisted NVDA results and English PDF repair

On November 15, the user reported successful NVDA checks for the homepage skip
link and heading, newsletter labels and empty-field validation, language menu
choices and Escape focus restoration, and automatic directory result-count
announcements. These are user-assisted results, not automated screen-reader tests.

The user then reported that the English election PDF read only the first
column of the first-page statistics. Inspection confirmed that the original
four-page PDF lacked a structure tree and marked-document metadata. Its raw
text included all three party cards, but the viewer was left to infer the
reading order from the layout.

The English PDF now has an explicit logical structure: heading levels, complete
party/metric groups, four tables with column and row headers, and five tagged
links. Repeated headers/footers and decorative drawings are marked as artifacts.
The script `scripts/tag-election-pdf.py` is guarded by the original PDF hash.
All four pages were rendered before and after the repair and compared pixel
for pixel; all renderings matched. Extracted text also matches exactly.

The English download link includes a version query to request the repaired
file. Real NVDA retesting of that file is pending. This repair does not establish
PDF/UA compliance. Other language PDFs, the NDP renewal report and workbook
accessibility have not been remediated by this targeted repair.
