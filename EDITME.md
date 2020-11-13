---
markdown:
    path: README.md
    image_dir: /assets
    absolute_image_path: true
export_on_save:
    markdown: true
---

<!-- ATTENTION
DON'T edit the README.md file! It will be overridden by this document.

This document is created with the vs-code extension - Markdown Preview Enhanced
> https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced
-->

# LSD Project Frontend | SSR & REST API {ignore=true}

_Large System Development, fall 2020_

**Stephan Duelund Djurhuus**

@import "/assets/cover.png" {alt="cover image"}

## Content {ignore=true}

<!-- Auto-generated Table of Content -->

[toc]

## Setup

```bash
# bash
yarn install
```

> If the contract isn't installed add it with yarn.

[Fraqs/LSD-Project.Contract](https://github.com/Fraqs/LSD-Project.Contract)

```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```

## Usage

### Testing

The test is handled by the test framework Jest.

```bash
# bash
yarn test
```

### Development

The development environment uses a mock/ fake Contract. This is used when the backend isn't connected to the frontend.

```bash
# bash
yarn dev
```

### Production

The production environment uses the RPC Contract. This is used when the backend is connected to the frontend.

```bash
# bash
yarn start
```

## {ignore=true}

Software Development @ Copenhagen Business Academy, Denmark 2020
