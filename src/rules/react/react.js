/**
 * @see {@link https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules | List of supported rules}
 */
module.exports = {
    // Enforces consistent naming for boolean props
    // 'react/boolean-prop-naming': 'off',

    // Prevent extraneous defaultProps on components
    // 'react/default-props-match-prop-types': 'off'

    // Prevent missing displayName in a React component definition
    'react/display-name': 'error',

    // Forbid certain props on Components
    // 'react/forbid-component-props': 'off',

    // Forbid certain elements
    // 'react/forbid-elements': 'off',

    // Forbid certain propTypes
    // 'react/forbid-prop-types': 'off',

    // Forbid foreign propTypes
    // 'react/forbid-foreign-prop-types': 'off',

    // Prevent using Array index in key props
    // 'react/no-array-index-key': 'off',

    // Prevent passing children as props
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX properties
    // 'react/no-danger': 'off',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    // 'react/no-did-mount-set-state': 'off',

    // Prevent usage of setState in componentDidUpdate
    // 'react/no-did-update-set-state': 'off',

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',

    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'off',

    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    // 'react/no-multi-comp': 'off',

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // 'react/no-redundant-should-component-update': 'off',

    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',

    // Prevent usage of setState
    // 'react/no-set-state': 'off',

    // Prevent common casing typos
    // 'react/no-typos': 'off',

    // Prevent using string references in ref attribute.
    'react/no-string-refs': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property (fixable)
    'react/no-unknown-property': 'error',

    // Prevent definitions of unused prop types
    // 'react/no-unused-prop-types': 'off',

    // Prevent usage of setState in componentWillUpdate
    // 'react/no-will-update-set-state': 'off',

    // Enforce ES5 or ES6 class for React Components
    // 'react/prefer-es6-class': 'off',

    // Enforce stateless React Components to be written as a pure function
    // 'react/prefer-stateless-function': 'off',

    // Prevent missing props validation in a React component definition
    'react/prop-types': 'error',

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    // 'react/require-default-props': 'off',

    // Enforce React components to have a shouldComponentUpdate method
    // 'react/require-optimization': 'off',

    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children (fixable)
    // 'react/self-closing-comp': 'off',

    // Enforce component methods order (fixable)
    // 'react/sort-comp': 'off',

    // Enforce propTypes declarations alphabetical sorting
    // 'react/sort-prop-types': 'off',

    // Enforce style prop value being an object
    // 'react/style-prop-object': 'off',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    // 'react/void-dom-elements-no-children': 'off',
};