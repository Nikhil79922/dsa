/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length
    let m = text2.length
    let dp = Array.from({ length: n }, () => Array(m).fill(-1));
    return findSubsequences(n-1 , m-1 , text1 , text2 , dp);
};

function findSubsequences(i, j, t1, t2, dp) {
    // base case
    if (i < 0 || j < 0) return 0;

    if (dp[i][j] !== -1) return dp[i][j];

    // match
    if (t1[i] === t2[j]) {
        return dp[i][j] = 1 + findSubsequences(i - 1, j - 1, t1, t2, dp);
    }

    // not match
    return dp[i][j] = Math.max(
        findSubsequences(i, j - 1, t1, t2, dp),
        findSubsequences(i - 1, j, t1, t2, dp)
    );
}