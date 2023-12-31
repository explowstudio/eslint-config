module.exports = {
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        jsxSingleQuote: false,
        semi: true,
        trailingComma: "all",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/alt-text": "off",
    "@next/next/no-img-element": "off",
    "no-unused-vars": "off",
  },
};
