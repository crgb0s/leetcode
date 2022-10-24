const twoSum = function (nums, target) {
  // Create cache to map indices to complements
  const cache = {};

  for (let i = 0; i < nums.length; i += 1) {
    // Compute the complement -  the difference between current num and target
    const complement = target - nums[i];

    // If we haven't seen that complement yet, store current index in cache
    if (cache[complement] === undefined) {
      cache[nums[i]] = i;
    } else {
      // we have seen that complement, so return the two indices
      return [i, cache[complement]];
    }
  }
};
