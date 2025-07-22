describe("Chaos Test 1", () => {
  test("sometimes fast sometimes slow", async () => {
    const isSlow = Math.random() > 0.5;
    const delay = isSlow ? 8000 : 50; // Either 8 seconds or 50ms
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("unpredictable").toBe("unpredictable");
  });
});
