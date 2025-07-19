describe('Very Slow 8000ms Tests', () => {
  test('marathon test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    expect('slow').toBe('slow');
  });

  test('marathon test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    expect(10 * 10).toBe(100);
  });

  test('marathon test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    expect(Array.isArray([])).toBe(true);
  });

  test('marathon test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    expect({}.constructor).toBe(Object);
  });
}); 