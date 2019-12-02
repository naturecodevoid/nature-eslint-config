<h1 align="center">nature-eslint-config</h1>

<p align="center">naturecodevoid's <a href="https://eslint.io/">Eslint</a> Config

<p align="center"><a href="https://github.com/naturecodevoid/nature-eslint-config/blob/master/LICENSE"><img src="https://img.shields.io/github/license/naturecodevoid/nature-eslint-config?style=flat-square"></a> <a href="https://www.npmjs.com/package/nature-eslint-config"><img src="https://img.shields.io/npm/v/nature-eslint-config?style=flat-square"></a></p>

<h2 align="center">Usage</h2>

Install:

```shell
$ npm install --save-dev nature-eslint-config
```

Edit `.eslintrc.js`:

```javascript
module.exports = require("nature-eslint-config");
```

Or if you want to change some rules:

```javascript
let config = require("nature-eslint-config");

// Now add or change rules
config["rules"]["myRule"] = "error";

// Export the changed config
module.exports = config;
```
