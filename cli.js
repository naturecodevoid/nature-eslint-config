#!/usr/bin/env node
require("fs").copyFileSync(
    require("path").resolve(__dirname, "exports.js"),
    require("path").resolve(process.cwd(), ".eslintrc.js"),
);
console.log("Please run 'npm i -D nature-eslint-config' to finish installing, if you haven't already.");
