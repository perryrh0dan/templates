module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": false,
        "variableDeclaration": false,
        "call-signature": true,
        "property-declaration": true,
        "memberVariableDeclaration": true,
        "no-inferrable-types": true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "no-inferrable-types": [0, "always"],
  },
  overrides: [
    {
      files: "*.js",
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["off"]
      }
    }
  ]
}
