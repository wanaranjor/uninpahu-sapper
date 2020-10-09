module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  proseWrap: 'always',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  semi: true,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-svelte'],
  svelteSortOrder: 'scripts-markup-styles',
  svelteStrictMode: false,
  svelteBracketNewLine: true,
  overrides: [
    {
      files: [
        '.prettierrc',
        '.eslintrc',
        '.babelrc',
        '.tern-project',
        '.stylelintrc',
        '.lighthouserc',
      ],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['package.json'],
      options: {
        printWidth: 180,
      },
    },
  ],
};