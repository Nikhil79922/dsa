var longestSubarraySum = function (nums, k) {
let maxIndex = 0;
for (let i = 0; i < nums.length; i++) {
    let maxdistance=1;
    let sum = nums[i];
    if(sum==k){
        maxdistance=0;
        if(maxdistance>=maxIndex){
            maxIndex=maxdistance
        }
    } ;
    for (let j = i + 1; j < nums.length; j++) {
            sum = (nums[j]) + sum;
            if (sum == k) {
                maxdistance=(j-i)+1;
                console.log("maxdistance==>",maxdistance)
                if(maxdistance>=maxIndex){
                    maxIndex=maxdistance
                }
            };
    }
}
return maxIndex;
};
console.log(longestSubarraySum([1,2,3],3))