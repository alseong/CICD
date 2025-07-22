describe('Quick Test 1', () => {
  test('quick validation 1', async () => {
    const delay = Math.floor(Math.random() * 100) + 100; // 100-200ms
    await new Promise(resolve => setTimeout(resolve, delay));
    expect('quick1').toBe('quick1');
  });
});
