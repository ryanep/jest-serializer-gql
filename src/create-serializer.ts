import { ASTNode } from 'graphql';
import { isGraphqlSchema } from './utils';
import { format } from './format';

export const createSerializer = (): jest.SnapshotSerializerPlugin => ({
  test(node: ASTNode): boolean {
    return isGraphqlSchema(node);
  },
  print(node: ASTNode): string {
    return format(node);
  },
});
