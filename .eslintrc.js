module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    rules: {
        indent: [ 1, 4, { SwitchCase: 1 } ],
        quotes: [ 'warn', 'single' ],
        semi: [ 'warn', 'always' ],
        'no-unused-vars': [ 'warn' ],
        'semi-spacing': [ 'warn', { 'before': true, 'after': true } ],
        'comma-spacing': [ 'warn', { 'before': false, 'after': true } ], // a, b, espacios después de las comas
        'space-infix-ops': 2, // espacio entre los operadores
        'space-in-parens': [ 1, 'always', { 'exceptions': [ 'empty' ] } ],
        'array-bracket-spacing': [ 'warn', 'always' ],
        'object-curly-spacing': [ 'warn', 'always' ],
        'block-spacing': 'warn',
        'arrow-spacing': 'warn',
        'space-before-function-paren': 'warn',
        'keyword-spacing': [ 'warn', { 'before': true } ],
        'linebreak-style': [ 'error', 'unix' ],
        'no-underscore-dangle': [ 'error', { allow: [ '_id' ] } ],
        'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
        'react/jsx-indent': [ 'error', 4 ],
        'react/jsx-indent-props': [ 'error', 4 ],
        'react/prop-types': 0, // validación de props
        'react/jsx-curly-spacing': [ 'warn', {
            'when': 'always',
            'children': {
                'when': 'always'
            }
        } ],
        'react/jsx-props-no-spreading': [ 'warn', {
            'html': 'ignore',
            'custom': 'ignore',
            'exceptions': [ '' ]
        } ],
    },
} ;
