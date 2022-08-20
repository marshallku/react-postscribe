# @marshallku/react-postscribe

[![License](https://img.shields.io/npm/l/@marshallku/react-postscribe.svg)](https://www.npmjs.com/package/@marshallku/react-postscribe)
[![NPM Version](https://img.shields.io/npm/v/@marshallku/react-postscribe.svg)](https://www.npmjs.com/package/@marshallku/react-postscribe)
[![Known Vulnerabilities](https://snyk.io/test/github/marshallku/react-postscribe/badge.svg)](https://snyk.io/test/github/marshallku/@marshallku/react-postscribe)
[![NPM Downloads](https://img.shields.io/npm/dm/@marshallku/react-postscribe.svg)](https://www.npmjs.com/package/@marshallku/react-postscribe)

React component to render HTML with [`postscribe`](https://github.com/krux/postscribe).

---

Inspired by [`react-postscribe`](https://github.com/angeloashmore/react-postscribe).

<details>
<summary>What's the difference?</summary>

-   Add TypeScript support (both postscribe and react-postscribe)
-   Update version of React
-   Refactor to function component
-   Remove lodash

</details>

---

Made for better [albamon mobile](https://m.albamon.com/) MSA

## Install

```
npm install @marshallku/postscribe
# or
yarn add @marshallku/postscribe
```

## Usage

```tsx
import PostScribe from "@marshallku/react-postscribe";

function AdBanner() {
    return (
        <div className="ad-banner">
            <PostScribe html={`<script src="https://example.com/"></script>`} />
        </div>
    );
}

export default AdBanner;
```

## Props

| Property         | Type       | required | Description                                                                   |
| ---------------- | ---------- | -------- | ----------------------------------------------------------------------------- |
| html             | string     | **true** | An html string or a function that takes a DOM Document and writes to it.      |
| afterAsync       | () => void | false    | A callback called when an async script has loaded                             |
| afterDequeue     | () => void | false    | A callback called immediately before removing from the write queue            |
| afterStreamStart | () => void | false    | A callback called sync after a stream's first thread release                  |
| afterWrite       | () => void | false    | A callback called after writing buffered document.write calls                 |
| done             | () => void | false    | A callback that will be called when writing is finished                       |
| autoFix          | boolean    | false    | A boolean that allows disabling the autoFix feature of prescribe              |
| beforeEnqueue    | () => void | false    | A callback called immediately before adding to the write queue                |
| beforeWrite      | () => void | false    | A callback called before writing buffered document.write calls                |
| beforeWriteToken | () => void | false    | A callback called before writing a token                                      |
| error            | () => void | false    | A function that throws the error by default, but could be overwritten         |
| releaseAsync     | boolean    | false    | A boolean whether to let scripts w/ async attribute set fall out of the queue |
