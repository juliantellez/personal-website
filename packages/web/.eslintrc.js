const config = {
    parser: '@typescript-eslint/parser',
    rules: {
        /**
         * Imports
         */
         '@typescript-eslint/no-unused-vars': 'error',
         'import/order': [
             'error',
             {
                 'newlines-between': 'always',
             },
         ],

        'no-console': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    extends: [
        'eslint:recommended',
        /**
         * Ts
         */
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
         /**
         * Prettier
         */
          'plugin:prettier/recommended',
        /**
         * React
         */
        'plugin:react/recommended',
        /**
         * Imports
         */
         'plugin:import/errors',
         'plugin:import/warnings',
         'plugin:import/typescript',
    ],
    plugins: ['@typescript-eslint', 'import', 'prettier', "react-hooks"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}

module.exports = config
