![Codacy grade](https://img.shields.io/codacy/grade/ba7620b8dcd54f8b9b16d3a327293ab5?style=flat-square) ![Codecov](https://img.shields.io/codecov/c/github/4lch4/koa-oto?style=flat-square) [![CI/CD Pipeline](https://github.com/4lch4/koa-oto/actions/workflows/CI.yml/badge.svg?branch=main)](https://github.com/4lch4/koa-oto/actions/workflows/CI.yml) [![CI/CD Pipeline](https://github.com/4lch4/koa-oto/actions/workflows/CI.yml/badge.svg?branch=develop)](https://github.com/4lch4/koa-oto/actions/workflows/CI.yml)
![npm (scoped)](https://img.shields.io/npm/v/@4lch4/koa-oto?style=flat-square) ![NPM](https://img.shields.io/npm/l/@4lch4/koa-oto?style=flat-square) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@4lch4/koa-oto?style=flat-square) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/4lch4/koa-oto)

![Discord](https://img.shields.io/discord/325504841541746688)
![ClearlyDefined Score](https://img.shields.io/clearlydefined/score/npm/npmjs/@4lch4/koa-oto/1.3.2?style=flat-square)

# Sindri Notes

This directory will be/is a collection of notes related to the development, management, etc., of Project Sindri.

## Key Info

- [Whimsical Workspace][0]

## Endpoints

This is a rough design of what the endpoints will be and what they will do:

- /new/:projectType
  - The primary endpoint where you specify what type of project you're trying to bootstrap.
- /meta
  - Provides lists and info regarding what Sindri is capable of.
  - Things like a list of all available endpoints and the methods they support.

### Rough API Design

![Rough-API-Design][1]

[0]: https://whimsical.com/sindri-TJdmmAHJNZcmYN9EeUgn9X
[1]: ./assets/img/Rough-API-Design-2022-05-27-0.png
