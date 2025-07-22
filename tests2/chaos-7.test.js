describe("Chaos Test 7", () => {
  test("tri-modal randomness", async () => {
    const randomFactor = Math.random();
    let delay;
    if (randomFactor < 0.3) delay = 50; // 30% chance: very fast
    else if (randomFactor < 0.6) delay = 3000; // 30% chance: medium
    else delay = 10000; // 40% chance: very slow

    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("random").toBe("random");
  });
});
