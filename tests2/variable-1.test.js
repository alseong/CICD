describe("Variable Test 1", () => {
  test("random heavy computation", async () => {
    const delay = Math.random() * 8000 + 2000; // 2-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect(1 + 1).toBe(2);
  });
});
