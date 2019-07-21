# jest-serializer-gql

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ryanep/jest-serializer-gql/master/LICENSE) [![codecov](https://codecov.io/gh/ryanep/jest-serializer-graphql-schema/branch/master/graph/badge.svg)](https://codecov.io/gh/ryanep/jest-serializer-graphql-schema)

Convert GraphQL schemas to a readable format for Jest snapshot testing.

## Install

`npm install --save-dev jest-serializer-gql`

## Usage

In order to use the Jest serializer, add this line to your Jest configuration.

```json
"snapshotSerializers": [
  "jest-serializer-gql"
]
```
