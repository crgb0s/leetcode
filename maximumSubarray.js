/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let max = -Infinity;
  let last = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = last > 0 ? last + nums[i] : nums[i];
    max = Math.max(cur, max);
    last = cur;
  }
  return max;
};
