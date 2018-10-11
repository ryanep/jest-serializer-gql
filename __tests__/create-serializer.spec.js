import createSerializer from '../src/create-serializer';

describe('createSerializer', () => {
  it('should expose a test function', () => {
    const serializer = createSerializer();
    expect(typeof serializer.test).toEqual('function');
  });

  it('should expose a print function', () => {
    const serializer = createSerializer();
    expect(typeof serializer.print).toEqual('function');
  });
});
