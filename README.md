## About

A Markdown Live Preview using Regex logic.
Contains a text input area and an output area into which to render the formatted
markdown.

## App Deploy

https://markdown-project.vercel.app/

### Run Project & Test

```
npm install
npm start
npm run test
```

#### Test Results (Jest)

```
PASS src/App.test.tsx
✓ #1: renders text input (149 ms)
✓ #2: renders markdown output - headings (28 ms)
✓ #3: renders markdown output - emphasis text (33 ms)
✓ #4: renders markdown output - images (31 ms)
✓ #5: renders markdown output - links (25 ms)
✓ #6: renders markdown output - blockquotes (25 ms)
✓ #7: renders markdown output - regular text with p tags (92 ms)
```

#### Input Sanitization

```
import DOMPurify from 'dompurify'

dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parseMarkdown(input)) }}

```
