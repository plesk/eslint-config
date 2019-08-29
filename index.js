const eslint = require('./src/rules/eslint');
const react = require('./src/rules/react');
const plesk = require('./src/rules/plesk');

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
    plugins: ['react', 'react-hooks', '@plesk/plesk'],
    settings: {
        react: {
            version: '16.8',
        },
    },
    rules: Object.assign({}, eslint, react, plesk),
};
