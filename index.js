const eslint = require('./src/rules/eslint');
const react = require('./src/rules/react');
const jest = require('./src/rules/jest');
const plesk = require('./src/rules/plesk');

const babelParser = require('@babel/eslint-parser');
const globals = require('globals');

const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jestPlugin = require('eslint-plugin-jest');
const jestFormattingPlugin = require('eslint-plugin-jest-formatting');
const pleskPlugin = require('@plesk/eslint-plugin-plesk');

module.exports = {
    languageOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        parser: babelParser,
        parserOptions: {
            jsx: true,
        },
        globals: {
            ...globals.jest,
            ...globals.node,
            ...globals.browser,
        },
    },
    plugins: {
        react: reactPlugin,
        'react-hooks': reactHooksPlugin,
        jest: jestPlugin,
        'jest-formatting': jestFormattingPlugin,
        '@plesk/plesk': pleskPlugin,
    },
    settings: {
        react: {
            version: '18.3',
        },
    },
    rules: { ...eslint, ...react, ...jest, ...plesk },
};
