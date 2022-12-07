class Solution:
    def search(self, nums: list[int], target: int) -> int:
        self.nums = nums
        self.target = target

        low = 0
        high = len(nums) - 1

        while low <= high:
            mid = (high + low) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
            
        return -1


s = Solution()
one = s.search([-1,0,3,5,9,12], 9)  #  4
two = s.search([-1,0,3,5,9,12], 2)  # -1

print(one, two)