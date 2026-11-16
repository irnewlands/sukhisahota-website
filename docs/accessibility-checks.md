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

An attempted repair added a logical structure and passed structural and visual
checks, but the user's real NVDA retest failed: the viewer announced only
"graphic Page rendition". The attempt was withdrawn and the pre-repair English
PDF was restored. The repair remains in Git history for diagnosis; its script
has been removed from the current tree. Do not treat this PDF as screen-reader
verified or PDF/UA compliant.

A full semantic HTML version is provided as the primary alternative at
`/election-data/BC_Election_2026_Analysis_Nov09_1437.html`. It includes all report
sections, three party summaries in sequence, all four data tables with native
row/column headers, and source links. The election page links to it in all five
languages, explicitly identifying the report as English. The dated snapshot
and all table values are preserved. Browser semantic checks and source-value
comparisons are separate from the pending real NVDA test. When refreshing the
dated report, refresh this web version alongside the PDF and workbook.
Other language PDFs, the NDP renewal report and workbook accessibility remain
outside this targeted repair.
