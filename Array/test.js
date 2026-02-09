// let j=0;
// for(let i=0;i<10000;i++){
// j=i;
// }
// console.log("j without console.logs----->",j)


// let T=0;
// for(let i=0;i<10000;i++){
// T=i;
// console.log("T without console.logs----->",T)
// }

let a = "23"
let arr = ["-", "-", ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"], ["m", "n", "o"], ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]];
let index = a.split("")[0]
console.log("index----->", index)
console.log("arr[index]----->", arr[index])


function bubble(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log("Bubble", bubble([5, 3, 8, 4, 2]));

function selection(arr) {
    let n = arr.length;
    if (n <= 1) return arr;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }

    }
    return arr;
}
console.log("selection", selection([1, 4, 16, 8, 4, 2, 4, 6, 1, 3, 5, 7, 9, 11, 13, 15]));

function insertion(arr) {
    let n = arr.length;
    if (n <= 1) return arr;
    for (let i = 1; i < n; i++) {
        let sorted = arr[i];
        let j = i;
        while (j >= 0 && arr[j - 1] > sorted) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    return arr;
}
console.log("insertion", insertion([1, 4, 16, 8, 4, 2, 4, 6, 1, 3, 5, 7, 9, 11, 13, 15]));

function mergeSort(arr) {
    let n = arr.length;
    if (n <= 1) return arr;
    let mid = Math.floor(n / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            sorted.push(right.shift());
        } else {
            sorted.push(left.shift());
        }
    }
    return [...sorted, ...left, ...right];
}
console.log("mergeSort", mergeSort([1, 4, 16, 8, 4, 2, 4, 6, 1, 3, 5, 7, 9, 11, 13, 15]));

function quickSort(arr) {
    let n = arr.length;
    if (n <= 1) return arr;
    let pivot = arr[0]
    let left = [];
    let right = [];
    for (let i = 1; i < n; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log("quickSort", quickSort([1, 4, 16, 8, 4, 2, 4, 6, 1, 3, 5, 7, 9, 11, 13, 15]));

// const nikhil = new Date()
// const formateDate=nikhil.toString()
// console.log(formateDate.split(" "))

// function conversion(str){
//     let result=str.split("-").map(Number)
//     let year=result[0].toString(2)
//     let month=result[1].toString(2)
//     let day=result[2].toString(2)
//     return  console.log(`${year}-${month}-${day}`)
// }
// const date="2025-07-22"
// conversion(date)

//Recursion
// const recursive=(n)=>{
//     if (n==0) return true;
//     console.log("Value from n to 1------>>>",n)
//     n--;
//     recursive(n)
// }
// recursive(5)

// const recursive=(n)=>{
//     console.log("Value from 1 to n------>>>",n)
//     n++;
//     recursive(n)
// }
// recursive(1)

var trailingZeroes = function(n) {
 if (n == 0) return 0;
let factor=factorial(n).toString().split()
let output=0;
console.log(factor)
for(let i=factor.length-1;factor.length>0;i--){
    if(factor[i]=="0" ){
        output ++;
    }else{
        break;
    }
}
console.log("output---------->",output)
return output
};
var factorial = function(n){
if (n !== 1) { return n * factorial(n - 1) } else { return 1 }; 
}
console.log(trailingZeroes(30))


var fib = function(n) {
    if(n==0) return 0;
    if(n==1) return 1;

    return (fib(n-1) + fib(n-2))
};
console.log(fib(30))


var numberOfSteps = function(num) {
    let output;
    if(num==0) return output;
    if(num % 2 != 0){
        output++;
        return numberOfSteps(num-1);
    }else{
         output++;
        return numberOfSteps(num/2);
    }
};

var removeElement = function (nums, val) {
    var k = 0;
    var n = nums.length;
    if(n==0) return k; 
    var cond = 0
    function recur(cond, nums, val) {
        if (cond == n) return 0;
        if (nums[cond] != val) {
            nums[k] = nums[cond];
            k++;
        }
        cond++;
        return recur(cond, nums, val)
    }
    recur(cond, nums, val);
    return k;
};
removeElement([2],3)


//Count Inversion:- 
function countInversions(arr) {
    return mergeSortCI(arr).inversionCount;
}

function mergeSortCI(arr){
    let n=arr.length;
    if (arr.length <= 1) return { arr, inversionCount: 0 };
    let mid=Math.floor(arr.length/2);
    let left=mergeSortCI(arr.slice(0,mid));
    let right=mergeSortCI(arr.slice(mid));
    let merged=mergeCI(left.arr,right.arr);
    let totalInversionCount=left.inversionCount + right.inversionCount + merged.inversionCount
    return {
        arr: merged.arr,
        inversionCount:totalInversionCount
       };
    }
function mergeCI(left,right){
let sorted=[];
let inversionCount=0;
while(left.length && right.length){
    if(left[0]>right[0]){
        sorted.push(right.shift());
        inversionCount +=left.length
    }else{
        sorted.push(left.shift());
    }
}
return {arr:[...sorted,...left,...right],inversionCount}
}


//Reverse Pair 

function reversePairs(arr) {
    return mergeSortCI(arr).inversionCount;
}

function mergeSortCI(arr){
    let n=arr.length;
    if (arr.length <= 1) return { arr, inversionCount: 0 };
    let mid=Math.floor(arr.length/2);
    let left=mergeSortCI(arr.slice(0,mid));
    let right=mergeSortCI(arr.slice(mid));
    let merged=mergeCI(left.arr,right.arr);
    let totalInversionCount=left.inversionCount + right.inversionCount + merged.inversionCount
    return {
        arr: merged.arr,
        inversionCount: totalInversionCount
    };
    }
function mergeCI(left,right){
let inversionCount=0;
let i=0;j=0
while(i<left.length && j<right.length){
    if(left[i]>2*right[j]){
        inversionCount +=(left.length-i);
        j++;
    }else{
        i++;
    }
}
 let sorted = [];
    let p = 0, q = 0;

    while (p < left.length && q < right.length) {
        if (left[p] <= right[q]) sorted.push(left[p++]);
        else sorted.push(right[q++]);
    }

    while (p < left.length) sorted.push(left[p++]);
    while (q < right.length) sorted.push(right[q++]);
 return { arr: sorted, inversionCount };
}

//Book Allocation 
class Solution {
    findPages(arr, k) {
     let n= arr.length;
     if (k > n) return -1;
     let left=0;
     let ans=-1;
     let right= arr.reduce((a, b) => a + b, 0);
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            let valid=this.isValid(arr,n,k,mid);
            if(valid){
                ans=mid;
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        return ans;
    }
    isValid(arr,n,k,mid){
        let student=1;
        let arrSum=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>mid){
                return false
            }
            if((arrSum+arr[i]) <=mid){
                arrSum += arr[i];
            }else{
         student +=1;
         arrSum=arr[i];
            }
        }
        if(student>k){
            return false;
        }else{
            return true;
        }
    }
}

//Aggrr Cow And Magnatic ball problem 

var maxDistance=(nums , C)=>{
    let n=nums.length;
    nums.sort((a,b)=>a-b)
    let low=1;
    let high=nums[n-1]-nums[0];
    let ans=-1
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(isValid(nums, n, C, mid)){
            ans=mid;
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return ans;
}

var isValid=(nums , n , C , mid)=>{
    let cow=1;
    let lastCowIndex=nums[0];
    for(let i=1;i<n;i++){
        if(nums[i]-lastCowIndex >= mid){
            cow++;
            lastCowIndex=nums[i];
        }
        if(cow==C) return true;
    }
    return false;
}

maxDistance([5,4,3,2,1,1000000000],2)