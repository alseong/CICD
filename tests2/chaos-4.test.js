describe("Chaos Test 4", () => {
  test("moderate processing", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1800)); // 1.8 seconds
    expect("moderate").toBe("moderate");
  });
});
