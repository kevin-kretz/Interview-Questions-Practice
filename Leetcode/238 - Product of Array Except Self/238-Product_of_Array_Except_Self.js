/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let left = new Array(nums.length).fill(1);
    let right = new Array(nums.length).fill(1);
    let answer = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] = (right[i] * left[i]);
    }

    return answer;
};

productExceptSelf([1,2,3,4]);