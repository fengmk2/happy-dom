import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    "*": "vp check --fix"
  },
  lint: {"options":{"typeAware":true,"typeCheck":true}},
  fmt: {
    "singleQuote": true,
    "useTabs": true,
    "printWidth": 100,
    "trailingComma": "none",
    "sortPackageJson": false,
    "ignorePatterns": [
      "README.md"
    ]
  },
});
