This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

[Commitlint guide](https://commitlint.js.org/guides/getting-started.html)

pnpm add --save-dev @commitlint/{cli,config-conventional}

echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.ts

[Local setup](https://commitlint.js.org/guides/local-setup.html)

pnpm add --save-dev husky
pnpm husky init
echo "pnpm dlx commitlint --edit \$1" > .husky/commit-msg

[Commitizen cz-cli guide](https://github.com/commitizen/cz-cli)

pnpm dlx commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact

Create prepare-commit-msg hook to run commitizen

echo "exec < /dev/tty && node_modules/.bin/cz --hook || true" > .husky/prepare-commit-msg
