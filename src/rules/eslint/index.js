/**
 * @see {http://eslint.org/docs/rules/|ESLint Rules}
 */
module.exports = Object.assign(
    {},
    require('./possible-errors'),
    require('./best-practices'),
    require('./strict-mode'),
    require('./variables'),
    require('./nodejs-and-commonjs'),
    require('./stylistic-issues'),
    require('./ecmascript-6'),
);