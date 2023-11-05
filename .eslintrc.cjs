module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: [
    'n',
    'sonarjs',
    'prettier',
    'react',
    'react-hooks',
    'tailwindcss',
  ],
  rules: {
    'prettier/prettier': 'error',
    "n/exports-style": ["warn", "module.exports"],
    "n/no-missing-import":"off",
    "tailwindcss/no-custom-classname": "off",
    "react/prop-types": "off",
  }
}
