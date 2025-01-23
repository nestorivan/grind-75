import { describe, expect, test } from "vitest";
import twoSum from ".";

const cases = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
];

describe("it should return the expected result", () => {
  test.for(cases)(
    "given an array %o and target %d, it should return %o",
    ([nums, target, expected]) => {
      expect(twoSum(nums as number[], target as number)).toStrictEqual(
        expected
      );
    }
  );
});
