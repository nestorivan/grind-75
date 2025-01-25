import { describe, expect, test } from "vitest";
import validParentheses from ".";

const cases: Array<string | boolean>[] = [
  ["([])", true],
  ["()[]{}", true],
  ["(]", false],
  ["[()]", true],
];

describe("it should return the expected result", () => {
  test.for(cases)(
    "given a string of %s, it shold return %o",
    ([s, expected]) => {
      expect(validParentheses(s as string)).toStrictEqual(expected);
    }
  );
});
