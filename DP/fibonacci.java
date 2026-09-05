package DP;

import java.util.Arrays;

public class fibonacci {

    public int fib(int n) {

        if (n <= 1) {
            return n;
        }
        int prev1 = 0;
        int prev2 = 1;
        int count = 2;

        while (count <= n) {
            int temp = prev2;
            prev2 += prev1;
            prev1 = temp;
            count++;
        }
        return prev2;
        // int[] dp = new int[n + 1];

        // Arrays.fill(dp, -1);
        // return solution(n, dp);
    }

    //Memoization approach 
    //TC = O(n) , SC = O(n) + O(n)
    public int solution(int n, int[] dp) {

        if (n <= 1) {
            return n;
        }

        if (dp[n] != -1) {
            return dp[n];
        }

        dp[n] = solution(n - 1, dp) + solution(n - 2, dp);
        return dp[n];
    }

    //Tabulation Apporach -- No recurssion stack space required 
    //TC = O(n) , SC = O(n)
    public int sol(int n, int[] dp) {

        if (n > 1) {
            dp[0] = 0;
            dp[1] = 1;

            for (int i = 2; i <= n; i++) {
                dp[i] = dp[i - 1] + dp[i - 2];
            }
            return dp[n];
        }
        return n;

    }

    //Most optimal one , Constant Space complexity 
    public int sol3(int n, int prev1, int prev2, int count) {
        while (count <= n) {
            int temp = prev2;
            prev2 += prev1;
            prev1 = temp;
            count++;
        }
        return prev2;

    }
}
