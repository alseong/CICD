describe("Chaos Test 3", () => {
  test("chaos inducer", async () => {
    const isSlow = Math.random() > 0.3; // 70% chance of being slow
    const delay = isSlow ? 12000 : 25; // Either 12 seconds or 25ms
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("chaos").toBe("chaos");
  });
});
