describe("Heavy 4.5s Test", () => {
  test("data transformation pipeline", async () => {
    await new Promise((resolve) => setTimeout(resolve, 4500)); // 4.5 seconds
    expect("transformed").toBe("transformed");
  });
});
