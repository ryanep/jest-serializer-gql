import { createSerializer } from '../src/create-serializer';

describe('createSerializer', (): void => {
  it('should expose a test function', (): void => {
    const serializer = createSerializer();
    expect(typeof serializer.test).toEqual('function');
  });

  it('should expose a print function', (): void => {
    const serializer = createSerializer();
    expect(typeof serializer.print).toEqual('function');
  });
});
