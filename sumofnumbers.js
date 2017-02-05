/**
 * E26 Assignment
 * Created by jojona on 2/5/17.
 */

const numbers = [1,2,3,4, 5, 6];

function sumFor(nums) {
    let totalNum = 0;
    for (const num of nums) {
      totalNum += num;
    }
    return totalNum;
}

console.log(sumFor(numbers));

function sumWhile(nums) {
    let totalNum = 0;
    let i = 0;
    while (i < nums.length) {
      totalNum += nums[i];
      i++;
    }
    return totalNum;
}

console.log(sumWhile(numbers));

function sumRecursion(nums) {
  if (nums. length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(numbers));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function memos(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numbers));