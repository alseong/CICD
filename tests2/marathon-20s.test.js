describe("Marathon 20s Test", () => {
  test("massive file processing operation", async () => {
    await new Promise((resolve) => setTimeout(resolve, 20000)); // 20 seconds
    expect("processed").toBe("processed");
  });
});
