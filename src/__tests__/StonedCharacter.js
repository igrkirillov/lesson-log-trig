import StonedCharacter from "../StonedCharacter";

describe("stoned character module", () => {
  test ("atack checks: stoned = false, distance = 1", () => {
    const ch = new StonedCharacter("Laba", "Magician");
    ch.attack = 100;
    ch.distance = 1;
    expect(ch.attack).toBe(100);
  });
  test ("atack checks: stoned = false, distance = 2", () => {
    const ch = new StonedCharacter("Laba", "Magician");
    ch.attack = 100;
    ch.distance = 2;
    expect(ch.attack).toBe(90);
  });
  test ("atack checks: stoned = false, distance = 2", () => {
    const ch = new StonedCharacter("Laba", "Magician");
    ch.attack = 100;
    ch.distance = 4;
    expect(ch.attack).toBe(70);
  });
  test ("atack checks: stoned = true, distance = 1", () => {
    const ch = new StonedCharacter("Laba", "Magician");
    ch.attack = 100;
    ch.stoned = true;
    ch.distance = 1;
    expect(ch.attack).toBe(100);
  });
  test ("atack checks: stoned = true, distance = 2", () => {
    const ch = new StonedCharacter("Laba", "Magician");
    ch.attack = 100;
    ch.stoned = true;
    ch.distance = 2;
    expect(ch.attack).toBe(85);
  });
  test ("atack checks: stoned = true, distance = 2", () => {
    const ch = new StonedCharacter("Laba", "Magician");
    ch.attack = 100;
    ch.stoned = true;
    ch.distance = 4;
    expect(ch.attack).toBe(60);
  });
});