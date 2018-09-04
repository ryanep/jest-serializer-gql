import createSerializer from '../src/create-serializer';

describe('createSerializer', () => {
  it('exposes a test function', () => {
    const serializer = createSerializer();
    expect(typeof serializer.test).toEqual('function');
  });

  it('exposes a print function', () => {
    const serializer = createSerializer();
    expect(typeof serializer.print).toEqual('function');
  });
});
