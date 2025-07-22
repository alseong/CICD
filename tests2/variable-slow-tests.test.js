describe("Variable Slow Tests - Unpredictable Timing", () => {
  test("random heavy computation 1", async () => {
    // Simulates unpredictable database/API calls
    const delay = Math.random() * 8000 + 2000; // 2-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect(1 + 1).toBe(2);
  });

  test("random heavy computation 2", async () => {
    const delay = Math.random() * 6000 + 4000; // 4-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect(true).toBe(true);
  });

  test("random heavy computation 3", async () => {
    const delay = Math.random() * 5000 + 1000; // 1-6 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("test").toContain("test");
  });

  test("random heavy computation 4", async () => {
    const delay = Math.random() * 9000 + 1000; // 1-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect([1, 2, 3]).toHaveLength(3);
  });

  test("random heavy computation 5", async () => {
    const delay = Math.random() * 7000 + 3000; // 3-10 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect(Math.max(1, 2, 3)).toBe(3);
  });
});
