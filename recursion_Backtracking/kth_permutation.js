var getPermutation = function(n, k) {
    let nums=[]
    let fact=1;
    for(let i=1 ;i<n ;i++){
        fact *= i;
        nums.push(i);
    }
    nums.push(n);
    let ans='';
    k=k-1;
    let index=0;
while(true){
    index= Math.floor(k/fact);
ans += nums[index];
nums.splice(index,1);
if(nums.length == 0){
    break;
}
k= k%fact;
fact =fact/nums.length;
};

    return ans;
};