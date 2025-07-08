module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  rules: {
    "at-rule-no-deprecated": null,
    "value-keyword-case": null,
    "rule-empty-line-before": [
      "always-multi-line",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-class-pattern": null,
    "function-url-quotes": "always",
    "color-function-notation": "modern",
    "function-url-quotes": "always",
    "alpha-value-notation": "number",
  },
  ignoreFiles: ["**/node_modules/**", "**/dist/**"],
};
