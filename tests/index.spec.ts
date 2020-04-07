import gql from 'graphql-tag';
import { createSerializer } from '../src/create-serializer';

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

describe('serializer', (): void => {
  it('should match schema snapshot', (): void => {
    expect.addSnapshotSerializer(createSerializer());
    const ast = gql(schema);
    expect(ast).toMatchSnapshot();
  });

  it('should match query snapshot', (): void => {
    expect.addSnapshotSerializer(createSerializer());
    const ast = gql(query);
    expect(ast).toMatchSnapshot();
  });

  it('should not fail if the provided node is null', () => {
    expect.addSnapshotSerializer(createSerializer());
    expect(null).toMatchSnapshot();
  });
});
