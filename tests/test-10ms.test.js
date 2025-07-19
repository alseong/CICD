describe('Super Fast 10ms Tests', () => {
  test('rocket test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(Array.from([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('rocket test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(Object.keys({a: 1, b: 2})).toEqual(['a', 'b']);
  });

  test('rocket test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    expect('TEST'.toLowerCase()).toBe('test');
  });

  test('rocket test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 10));
    expect([1, 2, 3].length).toBe(3);
  });
}); 