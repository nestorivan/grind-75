function twoSum(nums: number[], target: number): number[] {
  // we create a map to store our seen numbers and its indexes
  const hm = new Map<number, number>();

  // we iterate all elements to search for combination of numbers
  for (let i = 0; i < nums.length; i++) {
    // we get our current number
    const current = nums[i];
    // we calculate its complement to equal our target
    const complement = target - current;

    // if we have already seen the complement , we get its index and return it
    if (hm.has(complement)) {
      return [hm.get(complement)!, i];
    }

    // if not we save our current number and its index for future reference
    hm.set(current, i);
  }

  // we return an empty array to satisfy with the function signature in case of no result
  return [];
}
