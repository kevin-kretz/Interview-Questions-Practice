"""
https://leetcode.com/problems/running-sum-of-1d-array/
"""

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        output  = []
        running_total = 0
        
        for num in nums:
            running_total += num
            output.append(running_total)
        
        return(output)
