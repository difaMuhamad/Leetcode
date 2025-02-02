/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let res = init;
  if (nums.length === 0) {
    return init;
  }
  nums.forEach((num, i) => {
    res = fn(res, nums[i]);
  });
  return res;
};
