const eslint = require('./src/rules/eslint');
const react = require('./src/rules/react');

module.exports = {
    env: {
        es6: true,
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
    plugins: ['react'],
    settings: {
        react: {
            version: '16.4',
        },
    },
    rules: Object.assign({}, eslint, react),
};
