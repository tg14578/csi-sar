# Documents

PDFs dropped into this folder are served directly by Vercel at `/docs/<filename>.pdf` and open inline in the browser when linked.

## Naming convention

Use lowercase, hyphenated filenames so URLs stay clean:

- `project-proposal.pdf`
- `research-poster.pdf`
- `midterm-presentation.pdf`
- `final-report.pdf`
- `sustainability-report.pdf`

## How to add a document

1. Drop the PDF into this folder (`public/docs/`).
2. In `app/documents/page.js`, change the card's `href` from the Google Drive URL to `/docs/<filename>.pdf`.
3. Add `target="_blank" rel="noopener noreferrer"` if it isn't already, so the PDF opens in a new tab.
4. Commit and push — Vercel auto-deploys.

## CAD files

`.SLDPRT` files are hosted in the `Project-Glass-House` GitHub repo (not here) to keep this repo lean. Link those cards to the file's GitHub URL (e.g. `https://github.com/jackjones1320/Project-Glass-House/blob/main/cad/central-unit.SLDPRT`). GitHub will serve a download for SolidWorks files since the browser can't render them.
