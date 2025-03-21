import eslintPlugin from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
   eslintPlugin.configs.recommended,
   prettierConfig,

   {
      files: ['**/*.ts', '**/*.tsx'],
      languageOptions: {
         globals: {
            document: 'readonly',
            window: 'readonly'
         },
         parser: tsParser,
         parserOptions: {
            sourceType: 'module'
         }
      },
      plugins: {
         '@typescript-eslint': tseslint,
         react: reactPlugin,
         'react-hooks': reactHooks,
         prettier: prettierPlugin,
         '@typescript-eslint/no-unused-vars': 'off'
      },
      rules: {
         'prettier/prettier': 'error',
         'react/react-in-jsx-scope': 'off',
         '@typescript-eslint/explicit-module-boundary-types': 'off',
         '@typescript-eslint/no-explicit-any': 'warn'
      },
      settings: {
         react: {
            version: 'detect'
         }
      }
   }
];
