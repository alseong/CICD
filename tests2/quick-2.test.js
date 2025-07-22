describe('Quick Test 2', () => {
  test('quick validation 2', async () => {
    const delay = Math.floor(Math.random() * 100) + 100; // 100-200ms
    await new Promise(resolve => setTimeout(resolve, delay));
    expect('quick2').toBe('quick2');
  });
});
