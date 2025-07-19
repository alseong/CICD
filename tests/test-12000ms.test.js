describe('Extremely Slow 12000ms Tests', () => {
  test('ultra marathon test 1', async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    expect(Date.now()).toBeGreaterThan(0);
  });

  test('ultra marathon test 2', async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    expect(JSON.stringify({test: true})).toBe('{"test":true}');
  });

  test('ultra marathon test 3', async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    expect(Math.round(3.7)).toBe(4);
  });

  test('ultra marathon test 4', async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    expect('testing'.includes('test')).toBe(true);
  });
}); 