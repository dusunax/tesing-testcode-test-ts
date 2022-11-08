import { get_1_or_0, get_random } from "./randomInt";

/** 임의의 수 반환하기 : 0 또는 1 */
describe("get_1_or_0 function", () => {
  it("has no error", () => {
    expect(() => get_1_or_0()).not.toThrow();
  });

  it("output to be defined && not null", () => {
    expect(get_1_or_0()).toBeDefined();
    expect(get_1_or_0()).not.toBeNull();
  });
  it("output is number", () => {
    expect(Number.isNaN(get_1_or_0())).not.toBe(true);
  });
  it("output is integer", () => {
    expect(Number.isInteger(get_1_or_0())).toBe(true);
  });

  it("output number >= 0", () => {
    expect(get_1_or_0()).toBeGreaterThanOrEqual(0);
  });
  it("output number <= 1", () => {
    expect(get_1_or_0()).toBeLessThanOrEqual(1);
  });
});

/** 임의의 수 반환하기 : 0 ~ 입력값 사의 정수 */
describe("get_random function", () => {
  const testInput = Math.floor(Math.random() * 10);

  it("has no error", () => {
    expect(() => get_random(testInput)).not.toThrow();
  });

  // 입력값
  it("input validation: less than 0", () => {
    expect(() => get_random(-1)).toThrow(/양수가 아닙니다/);
  });

  // 출력값
  it("output to be defined && not null", () => {
    expect(get_random(testInput)).toBeDefined();
    expect(get_random(testInput)).not.toBeNull();
  });
  it("output is number", () => {
    expect(Number.isNaN(get_random(testInput))).not.toBe(true);
  });
  it("output is integer", () => {
    expect(Number.isInteger(get_random(testInput))).toBe(true);
  });
  it("output number is less than input", () => {
    expect(get_random(testInput)).toBeLessThanOrEqual(testInput);
  });
  it("output number is greater than 0", () => {
    expect(get_random(testInput)).toBeGreaterThanOrEqual(0);
  });
});
