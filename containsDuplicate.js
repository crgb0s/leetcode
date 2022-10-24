/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums) {
  let seen = {};
  for (const num of nums) {
    if (seen[num]) return true;
    seen[num] = true;
  }
  return false;
};
