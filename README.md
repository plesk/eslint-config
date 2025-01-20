# Plesk ESLint Config

ESLint configuration for Plesk projects

[![NPM version](https://img.shields.io/npm/v/@plesk/eslint-config.svg)](https://www.npmjs.org/package/@plesk/eslint-config)
[![NPM Downloads](https://img.shields.io/npm/dm/@plesk/eslint-config.svg)](https://www.npmjs.org/package/@plesk/eslint-config)


## Installation

```
npm install --save-dev eslint @plesk/eslint-config
```


## Usage

Example of `eslint.config.mjs`:
```js
import plesk from "@plesk/eslint-config";

export default [
    plesk,
    {
      // your overrides here
    }
] 
```
