import { buildASTSchema, printSchema } from 'graphql';

export default (schema, options = {}) => {
  if (options.ast) {
    return JSON.stringify(schema, null, 2);
  }

  const ast = buildASTSchema(schema);
  return printSchema(ast).trim();
};
