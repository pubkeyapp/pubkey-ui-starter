# PubKey UI Starter

Starter for a [PubKey UI](https://github.com/pubkeyapp/pubkey-ui) project.

> [!WARNING]  
> PubKey UI is unstable, there can be minor and major changes at any time.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or higher)
- [PNPM](https://pnpm.io/) (v8 or higher)
- [Git](https://git-scm.com/)

> [!TIP]
> If you don't have PNPM installed, you can install it using `corepack`:
>
> ```sh
> corepack enable
> corepack prepare pnpm@8 --activate
> ```

### Installation

1. Clone the repository:

```sh
git clone https://github.com/pubkeyapp/pubkey-ui-starter my-app
cd my-app
pnpm install
```

### Development

Start the API app:

```shell
pnpm dev:api
```

Start the web app:

```sh
pnpm dev:web
```

### Build

Build the API app:

```sh
pnpm build:api
```

Build the web app:

```sh
pnpm build:wev
```

### Lint

```sh

pnpm lint
```

### Test

```sh
pnpm test
```

## Add Anchor

This project is compatible with the generators from [create-solana-dapp](https://npm.im/create-solana-dapp).

You can use it to generate an Anchor application:

```shell
pnpm add -D @solana-developers/preset-anchor
pnpm nx generate @solana-developers/preset-anchor:application anchor --dry-run
```

With this base set up, you can now add Anchor programs and tests to your project.

```shell
pnpm nx generate @solana-developers/preset-anchor:template --projectName anchor --directory anchor --template counter counter --dry-run
```

## License

MIT
