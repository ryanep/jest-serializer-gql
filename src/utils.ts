import { ASTNode } from 'graphql';

export const isGraphqlSchema = (node: ASTNode): boolean => {
  if (typeof node === 'object' && node.kind && node.loc) {
    return true;
  }
  return false;
};
