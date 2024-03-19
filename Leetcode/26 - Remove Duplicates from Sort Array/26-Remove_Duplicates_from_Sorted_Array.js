/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;

    while (count < nums.length - 2) {
        if (nums[count] === nums[count+1]) {
            nums.splice(count, 1);
        }
        else {
            count++;
        }
    }

    return count;
};

removeDuplicates([1,1,2])