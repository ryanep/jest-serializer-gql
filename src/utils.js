export const isGraphqlSchema = schema => {
  if (typeof schema === 'object' && schema.kind !== null && schema.definitions !== null) {
    return true;
  }
  return false;
};
