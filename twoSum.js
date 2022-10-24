const twoSum = function (nums, target) {
  const cache = {};

  //
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (cache[complement] === undefined) {
      cache[nums[i]] = i;
    } else {
      return [i, cache[complement]];
    }
  }
};
