describe("Variable Test 5", () => {
  test("random heavy computation", async () => {
    const delay = Math.random() * 7000 + 3000; // 3-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect(Math.max(1, 2, 3)).toBe(3);
  });
});
