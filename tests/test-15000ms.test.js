describe('Glacially Slow 15000ms Tests', () => {
  test('glacial test 1 - epic journey', async () => {
    await new Promise(resolve => setTimeout(resolve, 3750));
    expect('slow and steady').toContain('steady');
  });

  test('glacial test 2 - patience required', async () => {
    await new Promise(resolve => setTimeout(resolve, 3750));
    expect(Math.PI).toBeCloseTo(3.14159, 4);
  });

  test('glacial test 3 - worth the wait', async () => {
    await new Promise(resolve => setTimeout(resolve, 3750));
    expect(new Date().getFullYear()).toBeGreaterThan(2020);
  });

  test('glacial test 4 - final countdown', async () => {
    await new Promise(resolve => setTimeout(resolve, 3750));
    expect('CircleCI test splitting rocks!'.split(' ')).toHaveLength(4);
  });
}); 