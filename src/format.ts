import { ASTNode } from 'graphql';
import { print } from 'graphql/language/printer';

export const format = (node: ASTNode): string => {
  const output = print(node).trim();
  return output;
};
