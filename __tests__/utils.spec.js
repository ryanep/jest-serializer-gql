import { isGraphqlSchema } from '../src/utils';

describe('src/utils', () => {
  describe('isGraphqlSchema', () => {
    it('should return false when value is not a GraphQL query', () => {
      const value = '__string__';
      const output = isGraphqlSchema(value);
      expect(output).toBeFalsy();
    });

    it('should return true when value matches a GraphQL query', () => {
      const value = {
        kind: '__kind__',
        definitions: '__definitions__',
        loc: '__loc__',
      };
      const output = isGraphqlSchema(value);
      expect(output).toBeTruthy();
    });
  });
});
