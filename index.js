/*
nature-eslint-config: naturecodevoid's Eslint Config
Copyright (C) 2019  naturecodevoid@GitHub, naturecodevoid#6253@Discord

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:github/recommended",
        "plugin:github/es6",
        "plugin:github/node",
        "plugin:prettier/recommended",
    ],
    env: {
        es6: true,
        node: true,
    },
    rules: {
        "eslint-comments/no-unlimited-disable": "off",
        "eslint-comments/no-use": "off",
        "no-console": "off",
        "no-unused-vars": "off",
        "no-redeclare": "off",
        "arrow-body-style": 0,
        curly: 0,
        "lines-around-comment": 0,
        "max-len": 0,
        "no-confusing-arrow": 0,
        "no-mixed-operators": 0,
        "no-tabs": 0,
        "no-unexpected-multiline": 0,
        "prefer-arrow-callback": 0,
        quotes: 0,
        "no-throw-literal": "off",
        "no-undef": "off",
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
};
