describe("Variable Test 4", () => {
  test("random heavy computation", async () => {
    const delay = Math.random() * 9000 + 1000; // 1-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect([1, 2, 3]).toHaveLength(3);
  });
});
