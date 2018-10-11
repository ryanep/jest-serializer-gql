# jest-serializer-graphql-schema

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE) [![codecov](https://codecov.io/gh/ryanep/jest-serializer-graphql-schema/branch/master/graph/badge.svg)](https://codecov.io/gh/ryanep/jest-serializer-graphql-schema)

Convert GraphQL schemas to a readable format for Jest snapshot testing.

## Install

`$ npm install --save-dev jest-serializer-graphql-schema`

## Usage

In order to use the Jest serializer with default options, add this line to your Jest configuration.

```json
"snapshotSerializers": [
  "jest-serializer-graphql-schema"
]
```
