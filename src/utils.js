export const isGraphqlSchema = schema => {
  if (
    typeof schema === 'object' &&
    schema.kind &&
    schema.definitions &&
    schema.loc
  ) {
    return true;
  }
  return false;
};
