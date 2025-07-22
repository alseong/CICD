describe("Mixed Unpredictable Batch - Chaos for Regular Mode", () => {
  test("sometimes fast sometimes slow 1", async () => {
    // Randomly either very fast or very slow - impossible to predict
    const isSlow = Math.random() > 0.5;
    const delay = isSlow ? 8000 : 50; // Either 8 seconds or 50ms
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("unpredictable").toBe("unpredictable");
  });

  test("medium complexity operation", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500)); // 2.5 seconds
    expect("medium").toBe("medium");
  });

  test("sometimes fast sometimes slow 2", async () => {
    const isSlow = Math.random() > 0.3; // 70% chance of being slow
    const delay = isSlow ? 12000 : 25; // Either 12 seconds or 25ms
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("chaos").toBe("chaos");
  });

  test("moderate processing", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1800)); // 1.8 seconds
    expect("moderate").toBe("moderate");
  });

  test("wildcard test", async () => {
    // Completely random between instant and very slow
    const delay = Math.random() * 15000; // 0-15 seconds
    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("wildcard").toBe("wildcard");
  });

  test("quick burst", async () => {
    await new Promise((resolve) => setTimeout(resolve, 200)); // 200ms
    expect("burst").toBe("burst");
  });

  test("another unpredictable one", async () => {
    const randomFactor = Math.random();
    let delay;
    if (randomFactor < 0.3) delay = 50; // 30% chance: very fast
    else if (randomFactor < 0.6) delay = 3000; // 30% chance: medium
    else delay = 10000; // 40% chance: very slow

    await new Promise((resolve) => setTimeout(resolve, delay));
    expect("random").toBe("random");
  });
});
