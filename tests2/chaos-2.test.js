describe("Chaos Test 2", () => {
  test("medium complexity operation", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500)); // 2.5 seconds
    expect("medium").toBe("medium");
  });
});
