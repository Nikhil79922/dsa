package DP;

public class climbStairs {

    public int climbStair
    (int n) {

        if (n <= 2) {
            return n;
        }
        int prev1 = 1;
        int prev2 = 2;
        int count = 2;

        while (count < n) {
            int temp = prev2;
            prev2 += prev1;
            prev1 = temp;
            count++;
        }
        return prev2;
    }
}
