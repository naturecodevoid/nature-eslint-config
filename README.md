<h1 align="center">nature-eslint-config</h1>

<p align="center">naturecodevoid's <a href="https://eslint.io/">Eslint</a> Config

<p align="center"><a href="https://github.com/naturecodevoid/nature-eslint-config/blob/master/LICENSE"><img src="https://img.shields.io/github/license/naturecodevoid/nature-eslint-config?style=flat-square"></a> <a href="https://www.npmjs.com/package/nature-eslint-config"><img src="https://img.shields.io/npm/v/nature-eslint-config?style=flat-square"></a></p>

<h2 align="center">Installing</h2>

<h3 align="center">CLI</h3>

This assumes you have Node.js and npm (bundled with node) and the terminal's working directory is where you want to make
the `.eslintrc.js`.

1. Install config: `$ npm install --save-dev nature-eslint-config`
1. Generate the `.eslintrc.js`: `$ npx nature-eslint-config`

If you want to change options:

<!-- prettier-ignore-start -->

```javascript
// .eslintrc.js
module.exports = {
    extends: [...require("nature-eslint-config")["extends"]],
    env: { ...require("nature-eslint-config")["env"] },
    rules: {
        ...require("nature-eslint-config")["rules"],
        myRule: "error",
        myRule2: "warn",
    },
    parserOptions: { ...require("nature-eslint-config")["parserOptions"] },
};
```

<!-- prettier-ignore-end -->

<h3 align="center">Manual</h3>

Install:

```shell
$ npm install --save-dev nature-eslint-config
```

Edit `.eslintrc.js`:

```javascript
module.exports = {
    extends: [...require("nature-eslint-config")["extends"]],
    env: { ...require("nature-eslint-config")["env"] },
    rules: { ...require("nature-eslint-config")["rules"] },
    parserOptions: { ...require("nature-eslint-config")["parserOptions"] },
};
```

Or if you want to change some rules:

```javascript
// .eslintrc.js
module.exports = {
    extends: [...require("nature-eslint-config")["extends"]],
    env: { ...require("nature-eslint-config")["env"] },
    rules: {
        ...require("nature-eslint-config")["rules"],
        myRule: "error",
        myRule2: "warn",
    },
    parserOptions: { ...require("nature-eslint-config")["parserOptions"] },
};
```
