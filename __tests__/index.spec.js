import gql from 'graphql-tag';
import { createSerializer } from '../src';

const schema = `
	type User {
    id: ID!
    firstName: String! @deprecated
	}

	type Query {
		users(firstName: String): [User]
	}

	type Mutation {
		login(emailAddress: String! password: String!): User
	}
`;

describe('graphql schema', () => {
  it('should match snapshot when exporting AST', () => {
    expect.addSnapshotSerializer(createSerializer({ ast: true }));
    const ast = gql(schema);
    expect(ast).toMatchSnapshot();
  });

  it('should match GraphQL schema snapshot with default settings', () => {
    expect.addSnapshotSerializer(createSerializer());
    const ast = gql(schema);
    expect(ast).toMatchSnapshot();
  });
});
