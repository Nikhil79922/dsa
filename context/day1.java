class Solution {
    public long maxSum(int[] nums, int k, int mul) {
        if(k <= 0 ) return 0;
        Arrays.sort(nums);
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
        long ans = 0;
        for (int i = 0; i < k; i++) {
            if (mul > 0) {
                ans += (long) nums[i] * mul;
                mul--;
            } else {
                ans += (long) nums[i];
            }
        }
        return ans;
    }
}©leetcode