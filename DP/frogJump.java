package DP;

public class frogJump {

    //find minimum 
    public int frogjump(int n, int[] height) {

        // int[] dp = new int[n];
        // Arrays.fill(dp, -1);
        // dp[0] = 0;
        // int ans = sol(n - 1, height, dp);
        //Tabulation solution...
        // for (int i = 1; i < n; i++) {
        //     int left = dp[i - 1] + Math.abs(height[i] - height[i - 1]);
        //     int right = Integer.MAX_VALUE;
        //     if (i > 1) {
        //         right = dp[i - 2] + Math.abs(height[i] - height[i - 2]);
        //     }
        //     dp[i] = Math.min(left, right);
        // }
        // return dp[n-1];
        //Most optimal solution -- Space Complexity to O(n)
        int prev = 0;
        int prev2 = 0;
        for (int i = 1; i < n; i++) {
            int left = prev + Math.abs(height[i] - height[i - 1]);
            int right = Integer.MAX_VALUE;
            if (i > 1) {
                right = prev2 + Math.abs(height[i] - height[i - 2]);
            }
            int curr = Math.min(left, right);
            prev2 = prev;
            prev = curr;

        }

        return prev;
    }

    //Memoization solution 
    public int sol(int n, int[] height, int[] dp) {
        if (n == 0) {
            return 0;
        }

        if (dp[n] != -1) {
            return dp[n];
        }
        int left = sol(n - 1, height, dp) + Math.abs(height[n] - height[n - 1]);
        int right = Integer.MAX_VALUE;
        if (n > 1) {
            right = sol(n - 2, height, dp) + Math.abs(height[n] - height[n - 2]);
        }
        return dp[n] = Math.min(left, right);
    }

}
