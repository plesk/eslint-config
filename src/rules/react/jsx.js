/**
 * @see {@link https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules | JSX-specific rules}
 */
module.exports = {
    // Enforce boolean attributes notation in JSX (fixable)
    'react/jsx-boolean-value': 'error',

    // Validate closing bracket location in JSX (fixable)
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    // Validate closing tag location in JSX (fixable)
    'react/jsx-closing-tag-location': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
    'react/jsx-curly-spacing': ['error', 'never'],

    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': ['error', 'never'],

    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

    // Enforce position of the first prop in JSX (fixable)
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'error',

    // Validate JSX indentation (fixable)
    'react/jsx-indent': ['error', 4],

    // Validate props indentation in JSX (fixable)
    'react/jsx-indent-props': ['error', 4],

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // Limit maximum of props on a single line in JSX (fixable)
    'react/jsx-max-props-per-line': ['error', {
        maximum: 1,
        when: 'multiline',
    }],

    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': ['error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
    }],

    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 'error',

    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'error',

    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ['error', { allowAllCaps: false, ignore: [] }],

    // Enforce props alphabetical sorting (fixable)
    'react/jsx-sort-props': 'off',

    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
    }],

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX (fixable)
    'react/jsx-wrap-multilines': 'error',
};
