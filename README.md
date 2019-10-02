<div align="center">
<h1>Preact Hooks - Instance</h1>

> Inspired by [donovan/use-instance](https://github.com/donavon/use-instance)

[![version][version-badge]][package]
[![MIT License][license-badge]][license]

<p>
A custom Preact Hook that provides a sensible alternative to useRef for storing instance variables.
</p>
</div>

<hr />

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Why?](#why)
- [Installation](#installation)
- [Docs](#docs)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Why? 

**See more in-depth explanation at:** [donovan/use-instance](https://github.com/donavon/use-instance#why).

- `useRef` is weird. 
- The fact that you have to access it via `.current` is strange.
- You treat the object returned by `useInstance` just like you would `this` in a class component, so you're already familiar with how it works.
- Use `useRef` if you're dealing with actual DOM elements.
- Use `useInstance` for instance properties and methods.

## Installation

***This package has [Preact 10+](https://github.com/preactjs/preact) as a peer dependency.***

`npm install @preact-hooks/instance --save-dev` or `yarn add @preact-hooks/instance -D`

You can also load it via the [unpkg](https://unpkg.com) CDN

`https://unpkg.com/@preact-hooks/instance` will download the latest UMD bundle.

All formats (UMD, CJS and ESM) are available in the dist folder inside the package.

## Docs

For usage and examples see [donovan/use-instance](https://github.com/donavon/use-instance#usage).

## LICENSE

[MIT](LICENSE)

<!-- prettier-ignore-start -->
[package]: https://www.npmjs.com/package/@preact-hooks/instance
[version-badge]: https://img.shields.io/npm/v/@preact-hooks/instance
[license]: https://github.com/mihar-22/preact-hooks-instance/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/mihar-22/preact-hooks-instance?color=b
<!-- prettier-ignore-end -->
