/**
 * @see {@link https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules | JSX-specific rules}
 */
module.exports = {
    /**
     * Enforce boolean attributes notation in JSX (fixable)
     */
    'react/jsx-boolean-value': 'error',

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
     */
    'react/jsx-child-element-spacing': 'error',

    /**
     * Validate closing bracket location in JSX (fixable)
     */
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    /**
     * Validate closing tag location in JSX (fixable)
     */
    'react/jsx-closing-tag-location': 'error',

    /**
     * Enforce curly braces or disallow unnecessary curly braces in JSX
     */
    'react/jsx-curly-brace-presence': 'off',

    /**
     * Enforce or disallow newlines inside of curly braces in JSX attributes and expressions (fixable)
     */
    'react/jsx-curly-newline': 'error',

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
     */
    'react/jsx-curly-spacing': ['error', 'never'],

    /**
     * Enforce or disallow spaces around equal signs in JSX attributes (fixable)
     */
    'react/jsx-equals-spacing': ['error', 'never'],

    /**
     * Restrict file extensions that may contain JSX
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    /**
     * Enforce position of the first prop in JSX (fixable)
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    /**
     * Enforce shorthand or standard form for React fragments
     */
    // 'react/jsx-fragments': 'off',

    /**
     * Enforce event handler naming conventions in JSX
     */
    'react/jsx-handler-names': 'error',

    /**
     * Validate JSX indentation (fixable)
     */
    'react/jsx-indent': ['error', 4],

    /**
     * Validate props indentation in JSX (fixable)
     */
    'react/jsx-indent-props': ['error', 4],

    /**
     * Validate JSX has key prop when in array or iterator
     */
    'react/jsx-key': 'error',

    /**
     * Validate JSX maximum depth
     */
    'react/jsx-max-depth': ['error', { max: 5 }],

    /**
     * Limit maximum of props on a single line in JSX (fixable)
     */
    'react/jsx-max-props-per-line': ['error', {
        maximum: 1,
        when: 'multiline',
    }],

    /**
     * Require or prevent a new line after jsx elements and expressions.
     */
    'react/jsx-newline': [
        'error',
        {
            prevent: true,
        },
    ],

    /**
     * Prevent usage of .bind() and arrow functions in JSX props
     */
    'react/jsx-no-bind': ['error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
    }],

    /**
     * Prevent comments from being inserted as text nodes
     */
    'react/jsx-no-comment-textnodes': 'error',

    /**
     * Prevents JSX context provider values from taking values that will cause needless rerenders.
     */
    'react/jsx-no-constructed-context-values': 'error',

    /**
     * Prevent duplicate props in JSX
     */
    'react/jsx-no-duplicate-props': 'error',

    /**
     * Prevent usage of unwrapped JSX strings
     */
    'react/jsx-no-literals': 'error',

    /**
     * Forbid javascript: URLs
     */
    'react/jsx-no-script-url': 'error',

    /**
     * Prevent usage of unsafe target='_blank'
     */
    'react/jsx-no-target-blank': 'error',

    /**
     * Disallow undeclared variables in JSX
     */
    'react/jsx-no-undef': 'error',

    /**
     * Disallow unnecessary fragments
     */
    'react/jsx-no-useless-fragment': 'error',

    /**
     * Limit to one expression per line in JSX
     */
    'react/jsx-one-expression-per-line': 'off',

    /**
     * Enforce PascalCase for user-defined JSX components
     */
    'react/jsx-pascal-case': ['error', { allowAllCaps: false, ignore: [] }],

    /**
     * Disallow multiple spaces between inline JSX props (fixable)
     */
    'react/jsx-props-no-multi-spaces': 'error',

    /**
     * Disallow JSX props spreading
     */
    'react/jsx-props-no-spreading': 'off',

    /**
     * Enforce default props alphabetical sorting
     */
    'react/jsx-sort-default-props': 'off',

    /**
     * Enforce props alphabetical sorting (fixable)
     */
    'react/jsx-sort-props': 'off',

    /**
     * Validate spacing before closing bracket in JSX (fixable)
     */
    'react/jsx-space-before-closing': 'off',

    /**
     * Validate whitespace in and around the JSX opening and closing brackets (fixable)
     */
    'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
    }],

    /**
     * Prevent React to be incorrectly marked as unused
     */
    'react/jsx-uses-react': 'error',

    /**
     * Prevent variables used in JSX to be incorrectly marked as unused
     */
    'react/jsx-uses-vars': 'error',

    /**
     * Prevent missing parentheses around multilines JSX (fixable)
     */
    'react/jsx-wrap-multilines': 'error',
};
