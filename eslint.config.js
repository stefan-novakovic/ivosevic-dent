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
            window: 'readonly',
            localStorage: 'readonly',
            setTimeout: 'readonly',
            clearTimeout: 'readonly',
            requestAnimationFrame: 'readonly',
            cancelAnimationFrame: 'readonly',
            HTMLDivElement: 'readonly',
            React: 'writable'
         },
         parser: tsParser,
         parserOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            ecmaFeatures: {
               jsx: true // ✅ THIS LINE IS ESSENTIAL
            }
         }
      },
      plugins: {
         '@typescript-eslint': tseslint,
         react: reactPlugin,
         'react-hooks': reactHooks,
         prettier: prettierPlugin
      },
      rules: {
         'prettier/prettier': 'error',
         'react/react-in-jsx-scope': 'off',
         'no-unused-vars': ['warn', { args: 'none' }],
         '@typescript-eslint/explicit-module-boundary-types': 'off',
         '@typescript-eslint/no-explicit-any': 'warn',
         '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' }
         ]
      },
      settings: {
         react: {
            version: 'detect'
         }
      }
   }
];
