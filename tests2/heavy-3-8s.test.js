describe("Heavy 3.8s Test", () => {
  test("batch processing simulation", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3800)); // 3.8 seconds
    expect("batch").toBe("batch");
  });
});
