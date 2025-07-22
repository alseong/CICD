describe("Variable Test 2", () => {
  test("random heavy computation", async () => {
    const delay = Math.random() * 6000 + 4000; // 4-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect(true).toBe(true);
  });
});
