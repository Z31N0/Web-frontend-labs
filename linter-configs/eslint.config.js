import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules/**"]
  },
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
        node: true,
        mocha: true
      }
    },

    rules: {
      // "no-console": "error",WDF only removed no-console
      "no-alert": "error",
      "no-eval": "error",
      "no-restricted-syntax": [  // WDF only
        "error",
        {
          selector: "CallExpression[callee.object.name='document'][callee.property.name='getElementById']",
          message: "Use of getElementById is not allowed."
        },
        {
          selector: "CallExpression[callee.object.name='document'][callee.property.name='getElementsByClassName']",
          message: "Use of getElementsByClassName is not allowed."
        },
        {
          selector: "CallExpression[callee.object.name='document'][callee.property.name='getElementsByTagName']",
          message: "Use of getElementsByTagName is not allowed."
        }
      ],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      //"indent": ["error", 2], // removed for WDF
      "brace-style": ["error", "1tbs"],
      "camelcase": ["error", {properties: "always", ignoreGlobals: true}],
      "prefer-template": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-var": "error",
      "no-magic-numbers": "off",
      "no-shadow": "error",
      "space-infix-ops": "error",
      "no-undef": "off", // WDF only
      "prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }]
    }
  }
];