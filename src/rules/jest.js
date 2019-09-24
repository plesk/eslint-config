/**
 * @see {@link https://github.com/jest-community/eslint-plugin-jest | ESLint plugin for Jest}
 */
module.exports = {
    /**
     * Enforce consistent test or it keyword
     */
    'jest/consistent-test-it': ['error', {
        fn: 'test',
        withinDescribe: 'test',
    }],

    /**
     * Enforce assertion to be made in a test body
     */
    'jest/expect-expect': 'error',

    /**
     * Disallow capitalized test names
     */
    'jest/lowercase-name': 'off',

    /**
     * Disallow alias methods
     */
    'jest/no-alias-methods': 'error',

    /**
     * Disallow commented out tests
     */
    'jest/no-commented-out-tests': 'error',

    /**
     * Disallow disabled tests
     */
    'jest/no-disabled-tests': 'error',

    /**
     * Disallow duplicate hooks within a describe block
     */
    'jest/no-duplicate-hooks': 'error',

    /**
     * Disallow empty titles
     */
    'jest/no-empty-title': 'error',

    /**
     * Disallow using expect().resolves
     */
    'jest/no-expect-resolves': 'error',

    /**
     * Disallow export from test files
     */
    'jest/no-export': 'error',

    /**
     * Disallow focused tests
     */
    'jest/no-focused-tests': 'error',

    /**
     * Disallow setup and teardown hooks
     */
    'jest/no-hooks': 'off',

    /**
     * Disallow identical titles
     */
    'jest/no-identical-title': 'error',

    /**
     * Disallow conditional logic
     */
    'jest/no-if': 'error',

    /**
     * Disallow Jasmine globals
     */
    'jest/no-jasmine-globals': 'error',

    /**
     * Disallow importing jest
     */
    'jest/no-jest-import': 'error',

    /**
     * Disallow large snapshots
     */
    'jest/no-large-snapshots': 'off',

    /**
     * Disallow manually importing from __mocks__
     */
    'jest/no-mocks-import': 'error',

    /**
     * Prevents expect statements outside of a test or it block
     */
    'jest/no-standalone-expect': 'error',

    /**
     * Using a callback in asynchronous tests
     */
    // 'jest/no-test-callback': 'error',
    // поизучать еще

    /**
     * Disallow using f & x prefixes to define focused/skipped tests
     */
    'jest/no-test-prefixes': 'error',

    /**
     * Disallow explicitly returning from tests
     */
    'jest/no-test-return-statement': 'error',

    /**
     * Disallow using toBeTruthy() & toBeFalsy()
     */
    'jest/no-truthy-falsy': 'error',

    /**
     * Prevent catch assertions in tests
     */
    'jest/no-try-expect': 'error',

    /**
     * Suggest using toBeCalledWith() OR toHaveBeenCalledWith()
     */
    'jest/prefer-called-with': 'error',

    /**
     * Suggest using expect.assertions() OR expect.hasAssertions()
     */
    'jest/prefer-expect-assertions': 'off',

    /**
     * Suggest using toMatchInlineSnapshot()
     */
    'jest/prefer-inline-snapshots': 'off',

    /**
     * Suggest using jest.spyOn()
     */
    'jest/prefer-spy-on': 'error',

    /**
     * Suggest using toStrictEqual()
     */
    'jest/prefer-strict-equal': 'error',

    /**
     * Suggest using toBeNull()
     */
    'jest/prefer-to-be-null': 'error',

    /**
     * Suggest using toBeUndefined()
     */
    'jest/prefer-to-be-undefined': 'error',

    /**
     * Suggest using toContain()
     */
    'jest/prefer-to-contain': 'error',

    /**
     * Suggest using toHaveLength()
     */
    'jest/prefer-to-have-length': 'error',

    /**
     * Suggest using test.todo()
     */
    'jest/prefer-todo': 'error',

    /**
     * Require a top-level describe block
     */
    'jest/require-top-level-describe': 'off',

    /**
     * Require that toThrow() and toThrowError includes a message
     */
    'jest/require-tothrow-message': 'error',

    /**
     * Enforce valid describe() callback
     */
    'jest/valid-describe': 'error',

    /**
     * Enforce having return statement when testing with promises
     */
    'jest/valid-expect-in-promise': 'error',

    /**
     * Enforce valid expect() usage
     */
    'jest/valid-expect': 'error',
};
