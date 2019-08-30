/**
 * @see {@link http://eslint.org/docs/rules/#stylistic-issues | Stylistic Issues}
 */
module.exports = {
    /**
     * enforce linebreaks after opening and before closing array brackets
     */
    // 'array-bracket-newline': 'off',

    /**
     * enforce consistent spacing inside array brackets
     */
    'array-bracket-spacing': 'error',

    /**
     * enforce line breaks after each array element
     */
    // 'array-element-newline': 'off',

    /**
     * disallow or enforce spaces inside of blocks after opening block and before closing block
     */
    // 'block-spacing': 'off',

    /**
     * enforce consistent brace style for blocks
     */
    'brace-style': ['error', '1tbs'],

    /**
     * enforce camelcase naming convention
     */
    camelcase: 'error',

    /**
     * enforce or disallow capitalization of the first letter of a comment
     */
    // 'capitalized-comments': 'off',

    /**
     * require or disallow trailing commas
     */
    'comma-dangle': ['error', 'always-multiline'],

    /**
     * enforce consistent spacing before and after commas
     */
    'comma-spacing': 'error',

    /**
     * enforce consistent comma style
     */
    'comma-style': ['error', 'last'],

    /**
     * enforce consistent spacing inside computed property brackets
     */
    'computed-property-spacing': ['error', 'never'],

    /**
     * enforce consistent naming when capturing the current execution context
     */
    // 'consistent-this': 'off',

    /**
     * require or disallow newline at the end of files
     */
    'eol-last': ['error', 'always'],

    /**
     * require or disallow spacing between function identifiers and their invocations
     */
    'func-call-spacing': 'error',

    /**
     * require function names to match the name of the variable or property to which they are assigned
     */
    // 'func-name-matching': 'off',

    /**
     * require or disallow named function expressions
     */
    // 'func-names': 'off',

    /**
     * enforce the consistent use of either function declarations or expressions
     */
    'func-style': 'error',

    /**
     * enforce line breaks between arguments of a function call
     */
    // 'function-call-argument-newline': 'off',

    /**
     * enforce consistent line breaks inside function parentheses
     */
    // 'function-paren-newline': 'off',

    /**
     * disallow specified identifiers
     */
    // 'id-blacklist': 'off',

    /**
     * enforce minimum and maximum identifier lengths
     */
    // 'id-length': 'off',

    /**
     * require identifiers to match a specified regular expression
     */
    // 'id-match': 'off',

    /**
     * enforce the location of arrow function bodies
     */
    'implicit-arrow-linebreak': 'error',

    /**
     * enforce consistent indentation
     */
    indent: ['error', 4, { SwitchCase: 1 }],

    /**
     * enforce the consistent use of either double or single quotes in JSX attributes
     */
    'jsx-quotes': ['error', 'prefer-double'],

    /**
     * enforce consistent spacing between keys and values in object literal properties
     */
    'key-spacing': 'error',

    /**
     * enforce consistent spacing before and after keywords
     */
    'keyword-spacing': 'error',

    /**
     * enforce position of line comments
     */
    'line-comment-position': ['error', { position: 'above' }],

    /**
     * enforce consistent linebreak style
     */
    // 'linebreak-style': 'off',

    /**
     * require empty lines around comments
     */
    // 'lines-around-comment': 'off',

    /**
     * require or disallow an empty line between class members
     */
    'lines-between-class-members': 'error',

    /**
     * enforce a maximum depth that blocks can be nested
     */
    'max-depth': ['error', 4],

    /**
     * enforce a maximum line length
     */
    'max-len': ['error', 180],

    /**
     * enforce a maximum number of lines per file
     */
    // 'max-lines': 'off',

    /**
     * enforce a maximum number of line of code in a function
     */
    // 'max-lines-per-function': 'off',

    /**
     * enforce a maximum depth that callbacks can be nested
     */
    'max-nested-callbacks': 'error',

    /**
     * enforce a maximum number of parameters in function definitions
     */
    'max-params': ['error', 3],

    /**
     * enforce a maximum number of statements allowed in function blocks
     */
    // 'max-statements': 'off',

    /**
     * enforce a maximum number of statements allowed per line
     */
    'max-statements-per-line': ['error', { max: 1 }],

    /**
     * enforce a particular style for multiline comments
     */
    'multiline-comment-style': ['error', 'separate-lines'],

    /**
     * enforce newlines between operands of ternary expressions
     */
    'multiline-ternary': ['error', 'always-multiline'],

    /**
     * require constructor names to begin with a capital letter
     */
    'new-cap': 'error',

    /**
     * require parentheses when invoking a constructor with no arguments
     */
    'new-parens': 'error',

    /**
     * require a newline after each call in a method chain
     */
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    /**
     * disallow Array constructors
     */
    'no-array-constructor': 'error',

    /**
     * disallow bitwise operators
     */
    // 'no-bitwise'; 'off',

    /**
     * disallow continue statements
     */
    // 'no-continue': 'off',

    /**
     * disallow inline comments after code
     */
    // 'no-inline-comments': 'off',

    /**
     * disallow if statements as the only statement in else blocks
     */
    'no-lonely-if': 'error',

    /**
     * disallow mixed binary operators
     */
    'no-mixed-operators': 'error',

    /**
     * disallow mixed spaces and tabs for indentation
     */
    'no-mixed-spaces-and-tabs': 'error',

    /**
     * disallow use of chained assignment expressions
     */
    'no-multi-assign': 'error',

    /**
     * disallow multiple empty lines
     */
    'no-multiple-empty-lines': 'error',

    /**
     * disallow negated conditions
     */
    'no-negated-condition': 'error',

    /**
     * disallow nested ternary expressions
     */
    'no-nested-ternary': 'error',

    /**
     * disallow Object constructors
     */
    'no-new-object': 'error',

    /**
     * disallow the unary operators ++ and --
     */
    'no-plusplus': 'off',

    /**
     * disallow specified syntax
     */
    'no-restricted-syntax': 'off',

    /**
     * disallow all tabs
     */
    'no-tabs': 'error',

    /**
     * disallow ternary operators
     */
    'no-ternary': 'off',

    /**
     * disallow trailing whitespace at the end of lines
     */
    'no-trailing-spaces': 'error',

    /**
     * disallow dangling underscores in identifiers
     */
    // 'no-underscore-dangle': 'off',

    /**
     * disallow ternary operators when simpler alternatives exist
     */
    'no-unneeded-ternary': 'error',

    /**
     * disallow whitespace before properties
     */
    'no-whitespace-before-property': 'error',

    /**
     * enforce the location of single-line statements
     */
    // 'nonblock-statement-body-position': 'off',

    /**
     * enforce consistent line breaks inside braces
     */
    // 'object-curly-newline': 'off',

    /**
     * enforce consistent spacing inside braces
     */
    'object-curly-spacing': ['error', 'always'],

    /**
     * enforce placing object properties on separate lines
     */
    // 'object-property-newline': 'off',

    /**
     * enforce variables to be declared either together or separately in functions
     */
    'one-var': ['error', 'never'],

    /**
     * require or disallow newlines around variable declarations
     */
    // 'one-var-declaration-per-line': 'off',

    /**
     * require or disallow assignment operator shorthand where possible
     */
    // 'operator-assignment': 'off',

    /**
     * enforce consistent linebreak style for operators
     */
    // 'operator-linebreak': 'off',

    /**
     * require or disallow padding within blocks
     */
    'padded-blocks': ['error', 'never'],

    /**
     * require or disallow padding lines between statements
     */
    // 'padding-line-between-statements': 'off',

    /**
     * disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
     */
    'prefer-object-spread': 'error',

    /**
     * require quotes around object literal property names
     */
    'quote-props': ['error', 'as-needed'],

    /**
     * enforce the consistent use of either backticks, double, or single quotes
     */
    quotes: ['error', 'single', { avoidEscape: true }],

    /**
     * require or disallow semicolons instead of ASI
     */
    semi: ['error', 'always'],

    /**
     * enforce consistent spacing before and after semicolons
     */
    'semi-spacing': 'error',

    /**
     * enforce location of semicolons
     */
    'semi-style': ['error', 'last'],

    /**
     * require object keys to be sorted
     */
    // 'sort-keys': 'off',

    /**
     * require variables within the same declaration block to be sorted
     */
    // 'sort-vars': 'off',

    /**
     * enforce consistent spacing before blocks
     */
    'space-before-blocks': 'error',

    /**
     * enforce consistent spacing before function definition opening parenthesis
     */
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

    /**
     * enforce consistent spacing inside parentheses
     */
    'space-in-parens': 'error',

    /**
     * require spacing around infix operators
     */
    'space-infix-ops': 'error',

    /**
     * enforce consistent spacing before or after unary operators
     */
    'space-unary-ops': ['error', { words: true, nonwords: false }],

    /**
     * enforce consistent spacing after the // or /* in a comment
     */
    'spaced-comment': 'error',

    /**
     * enforce spacing around colons of switch statements
     */
    'switch-colon-spacing': 'error',

    /**
     * require or disallow spacing between template tags and their literals
     */
    'template-tag-spacing': ['error', 'never'],

    /**
     * require or disallow Unicode byte order mark (BOM)
     */
    'unicode-bom': ['error', 'never'],

    /**
     * require parenthesis around regex literals
     */
    'wrap-regex': 'off',
};
