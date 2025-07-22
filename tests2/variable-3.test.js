describe("Variable Test 3", () => {
  test("random heavy computation", async () => {
    const delay = Math.random() * 5000 + 1000; // 1-6 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("test").toContain("test");
  });
});
