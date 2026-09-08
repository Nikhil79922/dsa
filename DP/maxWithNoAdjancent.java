package DP;

public class maxWithNoAdjancent {

    public int maximumSumSubsequence(int[] nums) {

        int n = nums.length;

        // int[] dp = new int[n];
        // Arrays.fill(dp, -1);
        // return sol1(n - 1, nums, dp);
        //Tabulation solution 
        // dp[0] = nums[0];
        // for (int i = 1; i < n; i++) {
        //     int pick = nums[i];
        //     if (i > 1) {
        //         pick += dp[i - 2];
        //     }
        //     int notPick = 0 + dp[i - 1];
        //     dp[i] = Math.max(pick, notPick);
        // }
        // return dp[n - 1];
        //Most optimal solution space optimization - O(N)..
        int prev = nums[0];
        int prev2 = 0;

        for (int i = 1; i < n; i++) {
            int pick = nums[i] + prev2;
            int notPick = 0 + prev;
            int curr = Math.max(pick, notPick);
            prev2 = prev;
            prev = curr;

        }
        return prev;
    }

    public int sol1(int n, int[] nums, int[] dp) {

        if (n == 0) {
            return nums[0];
        }
        if (n < 0) {
            return 0;
        }
        if (dp[n] != -1) {
            return dp[n];
        }

        int pick = nums[n] + sol1(n - 2, nums, dp);
        int notPick = 0 + sol1(n - 1, nums, dp);

        return dp[n] = Math.max(pick, notPick);
    }
}
