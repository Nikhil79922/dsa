// Print from n to 1 
// function seq(n){
//     if(n==1) return console.log(n);
//     console.log(n);
//    return seq(n-1);
// }
// seq(4)

//Factorial form n!
function factorial(n){
if(n==0) return 1
return n * factorial(n-1);
}
console.log(factorial(4))

//Sum of all the number till "n";
function sumAll(n){
 if(n==1) return 1;
 return n+sumAll(n-1);
}
console.log("SummALL==>",sumAll(3))

//Fibonacci Number Problem
function fib(n){
if(n==0) return 0;
if(n==1) return 1;
    return fib(n-1)+fib(n-2);
}
console.log(fib(4))

//Check that an Array is sorted or Not 
function sorted(arr,n){
    if(n==0 || n==1) return true
    return arr[n-1]>=arr[n-2] && sorted(arr,n-1);
}
console.log(sorted([1,2,4,5,6],5))

//Binary Search using Recursion 
function binary(left,right,arr,target){
    if(left>right) return -1
    let mid=Math.floor((left+right)/2);
    if(arr[mid]==target)return mid;
    if(arr[mid]>target){
        right=mid-1;
        return binary(left,right,arr,target)
    }
    if(arr[mid]<target){
        left=mid+1;
        return binary(left,right,arr,target)
    }
}
let arr=[-1,0,3,5,9,12]
console.log("Binay Search===>",binary(0,arr.length-1,arr,9))