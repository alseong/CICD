describe("Heavy 6.8s Test", () => {
  test("complex algorithm simulation 2", async () => {
    await new Promise((resolve) => setTimeout(resolve, 6800)); // 6.8 seconds
    expect("complex").toBe("complex");
  });
});
