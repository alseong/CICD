describe("Chaos Test 6", () => {
  test("quick burst", async () => {
    await new Promise((resolve) => setTimeout(resolve, 200)); // 200ms
    expect("burst").toBe("burst");
  });
});
