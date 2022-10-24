/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const L = new Array(nums.length),
    R = new Array(nums.length);
  L[0] = 1;
  R[R.length - 1] = 1;
  for (let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1];
    R[R.length - 1 - i] = R[R.length - i] * nums[R.length - i];
  }
  for (let i = 0; i < L.length; i++) {
    L[i] = L[i] * R[i];
  }
  return L;
};
