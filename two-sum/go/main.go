package main

func twoSum(nums []int, target int) []int {
	// we create a map to store our seen number and its indexes
	hm := make(map[int]int)

	// we iterate all elements to search for a combination of numbers
	// n = current number
	// i = index
	for i, n := range nums {
		// we calculate its complement to equal our target
		complement := target - n

		// if we have already seen the complement, we get its index and return it
		// we could also do
		// if value, exists := hm[complement]; exists
		value, exists := hm[complement]
		if exists {
			return []int{value, i}
		}

		// if not we save or current number and its index for future reference
		hm[n] = i
	}

	return []int{}
}

func main() {

}
