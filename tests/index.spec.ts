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

const query = `
  query users {
    users {
      id
    }
  }
`;

describe('graphql schema', (): void => {
  it('should match graphql schema snapshot', (): void => {
    expect.addSnapshotSerializer(createSerializer());
    const ast = gql(schema);
    expect(ast).toMatchSnapshot();
  });

  it('should match graphql query snapshot', (): void => {
    expect.addSnapshotSerializer(createSerializer());
    const ast = gql(query);
    expect(ast).toMatchSnapshot();
  });
});
