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

expect.addSnapshotSerializer(createSerializer({ ast: true }));

describe('graphql schema', () => {
  it('matches snapshot', () => {
    const ast = gql(schema);
    expect(ast).toMatchSnapshot();
  });
});
