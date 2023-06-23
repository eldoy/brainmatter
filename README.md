# Brainmatter

Extract frontmatter data from markdown and HTML files.

### Install

```
npm i brainmatter
```

### Usage

```js
const brainmatter = require('brainmatter')
const content = read('markdown.md')
const { html, data } = brainmatter(content)
```

MIT Licensed. Enjoy!
