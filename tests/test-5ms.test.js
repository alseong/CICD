describe('Ultra Fast 5ms Tests', () => {
  test('blazing test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    expect(Math.max(1, 2, 3)).toBe(3);
  });

  test('blazing test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    expect('hello'.length).toBe(5);
  });

  test('blazing test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    expect(typeof 'string').toBe('string');
  });

  test('blazing test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 5));
    expect(Number.isInteger(42)).toBe(true);
  });
}); 