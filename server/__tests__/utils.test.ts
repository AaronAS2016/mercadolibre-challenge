import { countDecimals } from "../src/utils/decimals";

describe("utils function case ->", () => {
  test("utils function case no numberrs", () => {
    expect(countDecimals(undefined)).toBe(null);
  });

  test("utils function case with numbers without decimals must return 0", () => {
    expect(countDecimals(11)).toBe(0);
  });

  test("utils function case with numbers with 2 decimals", () => {
    expect(countDecimals(2.22)).toBe(2);
  });

  test("utils function case with numbers with 6 decimals", () => {
    expect(countDecimals(1.666666)).toBe(6);
  });
});
