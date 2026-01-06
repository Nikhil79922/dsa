//Print all the subset of an Array 
function subset(arr,ans,i){
    if(i===arr.length){
 console.log(ans)
        return
    }
    ans.push(arr[i]);
    subset(arr,ans,i+1);
    ans.pop();
    subset(arr,ans,i+1);
}

console.log("subset===>",subset([1,2,3],[],0))