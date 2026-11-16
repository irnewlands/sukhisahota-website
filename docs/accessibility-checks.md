# Accessibility changes — November 15, 2026

## Restore point

Before these changes, GitHub branch `backup/pre-accessibility-2026-11-15` was created at commit `068442aefc1aa4a57c82e5ed2af5602f575d99e4` in `irnewlands/sukhisahota-website`. It includes the November 9 election downloads and the Renewal report updates.

To undo this accessibility release, revert its commit on `main` and push the revert. This preserves history and lets the existing Cloudflare Pages deployment rebuild. Do not reset or force-push `main`. The backup branch also provides a permanent comparison point.

## Changes

- Dark orange (`#a83b00`) for white button text and orange text on light backgrounds; a lighter orange for small accents on dark backgrounds. White on dark orange is approximately 6.38:1; dark orange on the secondary-page cream is approximately 5.69:1.
- Persistent, associated first-name, last-name and email labels, with translated required-field indicators in English, French, Punjabi, Simplified Chinese and Tagalog.
- A translated first-tab skip link and one focusable `main-content` target on every page, including error pages.
- A dark-and-white keyboard focus indicator, scroll clearance beneath headers, immediate visibility of focused reveal sections, and reduced-motion handling for reveal effects.
- Signup feedback uses a polite status message for sending and provider-confirmed acceptance, and an alert for errors. The original timer and hidden response frame have been removed; see the MailerLite follow-up below.

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

- NVDA scenarios beyond the user-confirmed results below, including asynchronous signup-error announcements; VoiceOver on Apple devices.
- Subsequent newsletter delivery after signup. The user confirmed real website signup acceptance and its NVDA announcement below. Double opt-in is currently off, so a confirmation email is not promised.
- Actual Google Forms submission and confirmation; password-protected questionnaire flows with test credentials.
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
comparisons are separate from user-assisted screen-reader testing. When refreshing the
dated report, refresh this web version alongside the PDF and workbook.
Other language PDFs, the NDP renewal report and workbook accessibility remain
outside this targeted repair.


## Confirmed web-report NVDA retest

The user subsequently confirmed that NVDA reads all three party summaries,
including their elected-seat and vote totals, in the web report. The user also
confirmed that the Provincial vote shares table supports cell navigation with
Ctrl+Alt+Arrow keys and announces the relevant row/column headings alongside
the figures. These specific English-web-report checks passed in the user's
Windows/Chrome/NVDA environment. They do not certify every table, locale,
external form, PDF or spreadsheet, or establish site-wide WCAG conformance.
The restored PDF's screen-reader accessibility remains unresolved.


## User-assisted Google Forms checks

The Independent BC NDP Member Survey was tested by the user with NVDA in
Chrome on Windows. The user confirmed:

- The consent checkbox announces its checked state, and Next moves to the
  Background and involvement section with clear context.
- Answer controls on that page were checked through Question 4; multiple-choice
  options and selection state were announced.
- A long-answer field can be identified, edited and read after returning to it.
- Forward navigation remains clear through the remaining sections to the final
  page, including a Back/Next navigation check.

The required-consent validation is a partial pass: it blocks progression and
shows an error; NVDA reads "This is a required question" when the user navigates
to the message, but the user did not hear the error announced automatically.
Do not mark automatic error announcements as passed.

The user was instructed to leave the survey unsubmitted. Submission,
confirmation and email delivery have not been verified. No form wording or
settings were changed during this review.

The user subsequently confirmed the listening-conversation form's field labels,
required states and selected contact-method announcement in NVDA. The user also
confirmed that the general help-request form identifies each tested question,
its required status and its available choices clearly. These are basic
user-assisted control checks; final submission, confirmation and delivery were
not tested for either contact form.

The listening form currently repeats contact collection: one combined
email/telephone question followed by separate email and phone questions. That
remains a usability cleanup recommendation, not a confirmed screen-reader
failure. No questions or response-sheet structure were changed.

The password-protected rental and career questionnaires, mobile VoiceOver,
colour contrast and actual zoom behaviour within Google Forms were not covered
by these user-assisted checks. Do not describe all forms as fully accessible
or WCAG certified on this basis.

## MailerLite signup feedback follow-up

The selected embedded form is `190139921541891187`, shared by the homepage
and Get Involved signup component. MailerLite reports double opt-in disabled.
The user confirmed that its hosted version announces required/invalid states
when returning to fields and automatically announces a malformed-email error,
but does not automatically announce empty-form errors. Its hosted accessible
names include `name` and `last_name`. That hosted form was not modified here.

The website component now posts to the same public MailerLite form endpoint
using a readable CORS response. A real empty request confirmed both
`Access-Control-Allow-Origin: *` and the HTTP-200 validation response
`success: false` with `errors.fields.email`. It added no subscriber.
The component requires both a successful HTTP status and boolean
`success: true` before showing acceptance or clearing the fields.
HTTP failures, validation rejection, invalid JSON, network failures and
15-second timeouts retain entries and display an error alert. Sending and
acceptance use a persistent polite live region. The submit button remains
focusable with `aria-disabled` while pending; an in-flight guard prevents
duplicate submissions and fields are temporarily read-only. It makes no
confirmation-email promise. Feedback is translated into all five site languages.

Regression tests cover explicit acceptance, a response delayed beyond the old
800-ms timer, the real validation-error shape, ambiguous/malformed/error
responses, network/abort failures and the actual timeout. Local browser checks
with simulated provider responses verify pending status, acceptance/reset,
error/retained entries, and focus remaining on the submit button. These
simulations alone do not establish a successful real subscription or prove that
NVDA announces the new asynchronous feedback. TypeScript, all six regression
tests and the production build passed for this release.

### Confirmed real-signup NVDA retest

Following publication, the user completed the real-signup test in Chrome with
NVDA and confirmed that the acceptance message was announced automatically and
the fields cleared. The website shows this message only after MailerLite returns
an HTTP-success response with boolean `success: true`. Record this as a passed
user-assisted signup-acceptance announcement and field-reset check.

This confirmation does not establish that a new subscriber record was created
rather than an existing address being accepted, or that subsequent newsletters
will be delivered. No subscriber address was collected in this conversation.
The new asynchronous error announcement and retention of entries have been
tested with simulated responses but still need a user-assisted NVDA retest.
The separately hosted MailerLite form's empty-error announcement and field-name
issues remain unresolved.
