const eslint = require('./src/rules/eslint');
const react = require('./src/rules/react');
const jest = require('./src/rules/jest');
const plesk = require('./src/rules/plesk');

module.exports = {
    env: {
        es6: true,
        jest: true,
        node: true,
        browser: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    plugins: [
        'react',
        'react-hooks',
        'jest',
        'jest-formatting',
        '@plesk/plesk',
    ],
    settings: {
        react: {
            version: '16.8',
        },
    },
    rules: { ...eslint, ...react, ...jest, ...plesk },
};
