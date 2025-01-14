This is a [Next.js](https://nextjs.org) project bootstrapped with `pnpm dlx create-next-app@latest --use-pnpm`.

## Getting Started

Clone the repository and run `pnpm install` to install the dependencies.

## Development

Run `pnpm dev` to start the development server.

## Configuration step by step

Install and config each package and create the necessary files for his configuration.

### Commitlint

[See the commitlint guide](https://commitlint.js.org/guides/getting-started.html) and [local setup](https://commitlint.js.org/guides/local-setup.html)

```bash
pnpm add --save-dev @commitlint/{cli,config-conventional}
```

Create the commitlint configuration file

```bash
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.ts
```

### Husky

```bash
pnpm add --save-dev husky
pnpm husky init
echo "pnpm dlx commitlint --edit \$1" > .husky/commit-msg
```

### Commitizen and cz-conventional-changelog

[See the commitizen cz-cli guide](https://github.com/commitizen/cz-cli)

```bash
pnpm add -D commitizen
pnpm dlx commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact
```

Create prepare-commit-msg hook to run commitizen

```bash
echo "exec < /dev/tty && node_modules/.bin/cz --hook || true" > .husky/prepare-commit-msg
```

### Prettier and plugins

```bash
pnpm add -D prettier eslint-config-prettier eslint-config-prettier eslint-plugin-prettier
```

Create the prettier configuration file

```bash
echo "export default {plugins: ['prettier-plugin-organize-imports','prettier-plugin-tailwindcss'],
tailwindFunctions: ['clsx'],};" > prettier.config.mjs
```

### Lint-staged

```bash
pnpm add -D lint-staged
```

And in the pre commit husky hook copy the following:

```bash
npx lint-staged
```

And the package.json copy the following:

```json
 "devDependencies": {
   ....
  },
  "lint-staged": {
    "*.{js,ts}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{md,html,json}": "prettier --write"
  },
```
