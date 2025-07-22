describe("Heavy 5.2s Test", () => {
  test("network intensive operation", async () => {
    await new Promise((resolve) => setTimeout(resolve, 5200)); // 5.2 seconds
    expect("network").toBe("network");
  });
});
