import { isGraphqlSchema } from './utils';
import format from './format';

export default function createSerializer(options) {
  return {
    test(val) {
      return isGraphqlSchema(val);
    },
    print(val) {
      return format(val, options);
    },
  };
}
