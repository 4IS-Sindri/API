# Sindri Templates

A core aspect of Sindri is the different project types it can bootstrap. Each of these types has an associated template file in the `scripts/templates` directory.

## API

A template for bootstrapping a new API using [Koa][1].

## CLI

A template for bootstrapping a new CLI application using [Commander][2] and a few other helpful dependencies.

## Docs

A template for bootstrapping a new documentation website w/ [Docusaurus][3].

## Lib

A template for bootstrapping a new lib. A lib usually just provides methods for accessing API endpoints, a wrapper package is what I've heard it called.

## SDK

A template for bootstrapping a new SDK. The difference between a lib and an SDK is that a lib usually just provides methods for accessing API endpoints whereas an SDK will have extra classes, methods, etc., that help with using the API.

## Vault

A template for bootstrapping a new [Obsidian Vault][0].

[0]: https://obsidian.md/
[1]: https://koajs.com/
[2]: https://www.npmjs.com/package/commander
[3]: https://docusaurus.io/
