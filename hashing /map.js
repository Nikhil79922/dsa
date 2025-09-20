//frequency
let map = new Map();
let arr = [1, 2, 3, 4, 4, 4, 4, 2, 1, 1, 2, 3, 3, 2, 1, 3, 4, 5, 66, 6, 6, 6, 6, 6, 67, 4, 4, 43, 4, 5, 5, 67, 7, 7, 7, 7, 7, 7, 7];
for (let i = 0; i < arr.length; i++) {
    // if(map.has(arr[i])){
    //     map.set(arr[i],map.get(arr[i])+1)
    // }else{
    //     map.set(arr[i],1);
    // }

    map.set(arr[i], (map.get(arr[i]) || 0) + 1)  // alternative
}
console.log(map)

var sortPeople = function (names, heights) {
    let map = new Map();
    for (let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i])
    }
    let sorted = heights.sort((a, b) => b - a)
    let ans = []
    for (let j = 0; j < sorted.length; j++) {
        ans.push(map.get(sorted[j]))
    }
    return ans
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))

//---> Two Sum
var TwoSum = function (arr, target) {
    let index = 0;
    let result = []
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {

        let sub = target - arr[i]
        if (map.has(sub)) {
            result.push(map.get(sub))
            result.push(index)
            return result;
        } else {
            map.set(arr[i], index);
            index++;
        }
    }
    console.log(map)
}
console.log(TwoSum([2,7,11,15],9))


// Leet code 349
var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let set2 = new Set();
    let result=[];
    for(let a of nums2){
     if(set.has(a)){
         set2.add(a)
     }
    }
    for(let b of set2){
     result.push(b)
    }
    return result;
 };

 // Leet code 349 -- approach two.
 var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let result=[];
    for(let a of nums2){
     if(set.has(a) && !result.includes(a)){
        result.push(a)
     }
    }
    return result;
 };

 // Leet code 350
var intersect = function (nums1, nums2) {
    let map = new Map();
    let result = [];
    for (let n of nums1) {
        map.set(n, (map.get(n) || 0) + 1)
    }
    for (let n2 of nums2) {
        if (map.has(n2) && map.get(n2)) {
                result.push(n2);
                map.set(n2 , map.get(n2)-1);
        }
    }
return result
};

//LeetCode 560 -- brute force.
var subarraySum = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        if(sum==k) count ++;
        for (let j = i + 1; j < nums.length; j++) {
                sum = (nums[j]) + sum;
                if (sum == k) count++;
        }
    }
    return count;
};


//Leetcode 560 -- Optimal solution 
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(sum, 1);
    for (let i = 0; i < nums.length; i++) {
        sum=nums[i]+sum;
        if(map.has(sum-k)){
            count=count+map.get(sum-k)
        }
           map.set(sum, (map.get(sum) || 0) + 1)
        
    }
    return count;
};

//LeetCode 325 -- longest subarray sum equal to k {Brute Force}
var longestSubarraySum = function (nums, k) {
let maxIndex = 0;
for (let i = 0; i < nums.length; i++) {
    let maxdistance=0;
    let sum = nums[i];
    if(sum==k){
        maxdistance=1;
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



//LeetCode 325 -- longest subarray sum equal to k {Optimal solution}
var longestSubarraySum = function (nums, k) {
    let maxlength=0;
    let sum = 0;
    let map = new Map();
    map.set(sum, -1);
    for (let i = 0; i < nums.length; i++) {
        sum=nums[i]+sum;
        if(map.has(sum-k)){
           let length=i-map.get(sum-k);
           if(length>maxlength){
            maxlength=length;
           }
        }
            map.set(sum, i);
    }
    return maxlength;
};
console.log(longestSubarraySum([1,2,3,4,5],11))

//LeetCode 862 -- {Brute Force}
var shortestSubarray = function(nums, k) {
    let minlength = Infinity;  
   for (let i = 0; i < nums.length; i++) {
       let maxdistance=1;
       let sum = nums[i];
       if(sum>=k){
           maxdistance=1;
           if(maxdistance<minlength){
               minlength=maxdistance
           }
       } ;
       for (let j = i + 1; j < nums.length; j++) {
               sum = (nums[j]) + sum;
               if (sum >= k) {
                   maxdistance=(j-i)+1;
                   if(maxdistance<minlength){
                       minlength=maxdistance
                   }
               };
       }
   }
   return minlength === Infinity ? -1 : minlength; 
   };

   //LeetCode 862 -- {optimal solution}
var shortestSubarray = function(nums, k) {
    let minlength = Infinity;  
       let sum = 0;
       let map = new Map();
       map.set(sum, -1);
       for (let i = 0; i < nums.length; i++) {
           sum=nums[i]+sum;
           if(map.has(sum-k)){
              let length=i-map.get(sum-k);
              if(length<minlength){
               minlength=length;
              }
           }
           if (!map.has(sum)) {
               map.set(sum, i);
           }
       }
   return minlength === Infinity ? -1 : minlength;
   };

//Try failed!
   var shortestSubarray = function(nums, k) {
    let minlength = Infinity;  
       let sum = 0;
       let distance=0;
       let set = new Set(nums);
       for (let s of set) {
        sum += s;
        distance ++;
        if(sum >=k){
            sum=0;
            if(distance<minlength){
                minlength =distance;
            }
            distance=0;
        }
       }
   return minlength === Infinity ? -1 : minlength;
   };