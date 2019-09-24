/**
 * @see {@link https://github.com/dangreenisrael/eslint-plugin-jest-formatting | Formatting rules for jest tests}
 */
module.exports = {
    /**
     * This rule enforces a line of padding before and after 1 or more afterAll statements.
     */
    'jest-formatting/padding-around-after-all-blocks': 'error',

    /**
     * This rule enforces a line of padding before and after 1 or more afterEach statements.
     */
    'jest-formatting/padding-around-after-each-blocks': 'error',

    /**
     * This rule enforces a line of padding before and after beforeAll statements.
     */
    'jest-formatting/padding-around-before-all-blocks': 'error',

    /**
     * This rule enforces a line of padding before and after 1 or more beforeEach statements
     */
    'jest-formatting/padding-around-before-each-blocks': 'error',

    /**
     * This rule enforces a line of padding before and after 1 or more expect statements
     */
    'jest-formatting/padding-around-expect-groups': 'error',

    /**
     * This rule enforces a line of padding before and after 1 or more beforeEach statements
     */
    'jest-formatting/padding-around-describe-blocks': 'error',

    /**
     * This rule enforces a line of padding before and after 1 or more test/it statements
     */
    'jest-formatting/padding-around-test-blocks': 'error',
};
