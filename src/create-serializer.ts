import { ASTNode } from 'graphql';
import { isSchema } from 'graphql/type/schema';
import { format } from './format';

export const createSerializer = (): jest.SnapshotSerializerPlugin => {
  return {
    test(node: ASTNode): boolean {
      return isSchema(node);
    },
    print(node: ASTNode): string {
      return format(node);
    },
  };
};
