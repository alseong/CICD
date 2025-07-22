describe("Heavy 8.5s Test", () => {
  test("heavy computation task", async () => {
    await new Promise((resolve) => setTimeout(resolve, 8500)); // 8.5 seconds
    expect("computation").toBe("computation");
  });
});
