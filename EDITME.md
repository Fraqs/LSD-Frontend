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

## Components

-   [Backend](https://github.com/Fraqs/LSD-Project.Backend), Handles Database Management.
-   [Frontend](https://github.com/Fraqs/LSD-Project.Frontend), Handles REST API and Server Sided Rendering.
-   [Contract](https://github.com/Fraqs/LSD-Project.Contract), Handles Contract Interface & Data Transfer Objects.

## Setup

### Dependency Installation

```bash
# bash
yarn install
```

> If the contract isn't installed add it with yarn.

```bash
# bash
yarn add Fraqs/LSD-Project.Contract
```

[Contract Documentation](https://github.com/Fraqs/LSD-Project.Contract)

### Environment Configuration

Create a `.evn` file in the root of the project containing the content below.

```bash
NODE_ENV=development
RPC_HOST=http://localhost:3000
```

## Source Structure

```bash
src ┐
    ├ contract/     # the rpc contract and contract mock.
    ├ routes/       # the views route and api route.
    ├ views/        # ejs views.
    ├ static/       # static files for ejs - scripts, styles and images.
    ├ test/         # test files.
    └ index.ts      # main file.
...                 # configuration files
```

## Usage

### Testing

The test is handled by the test framework Jest.

```bash
# bash
yarn test
```

### Development

The development environment uses a `ContractMock`. This is used when the backend isn't connected to the frontend.

> Development environment can be set in the `.evn` as `NODE_ENV=development`.

```bash
# bash
yarn dev
```

### Production

The production environment uses the RPC Contract. This is used when the backend is connected to the frontend.

> Production environment can be set in the `.evn` as `NODE_ENV=production`.

```bash
# bash
yarn start
```

## {ignore=true}

Software Development @ Copenhagen Business Academy, Denmark 2020
