/**
 * @see {@link https://github.com/jest-community/eslint-plugin-jest | ESLint plugin for Jest}
 */
module.exports = {
    ...require('./jest'),
    ...require('./jest-formatting'),
};
