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
console.log("Git reset command test!");


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str= String(x)
     let len = str.length;
   function rev(s, n){
        s += str[n]
   if(n == 0){
    return s
   }
   n--
return rev(s,n)
   } 
  let palin = rev('',len-1);
 return palin == str ? true : false
};


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    function rev(s, n,m){
    if(n >= m){
     return
    }
    [s[n] , s[m]]=[s[m] , s[n]];
    m--;
    n++
 return rev(s,n,m)
    } 
    rev(s,0,len-1);
    return s
 };


 //Sum of N number 

 const sumN = function (N){
    function count(n){
      if(n > N){
        return 0
      }
     return n + count(n+1);
    }
   let totalSum= count(1);
   console.log(totalSum)
   return totalSum
  
  }
 console.log(sumN(3))



 const reverseArr = function (arr){
    let len = arr.length;
    function count(n,m){
     if(n>=m){
        return
     }
     [arr[n], arr[m]]=[arr[m],arr[n]];
      count(++n,--m);
    }
      count(0 , len-1);
   return arr
  }
 console.log(reverseArr([1,2,3,4,5,6]))


 const palinDromCheck = function (str){
    let len = str.length;
    function count(n){
     if(n < 0 ){
        return true
     }
     if ( str[n] !== str[len-1-n] ) return false;
      return count(--n);
    }
    return   count(len-1);
  }
 console.log(palinDromCheck('-121'))


//Level two , print the sub Sequnce sum equalll to k , only any one case to print 
 const PrintSequence = function (arr , k) {
let len = arr.length;
function printData(n,path,sum){
   if(n>= len){
      if( sum == k ){
         console.log(path);
         return true;
      } 
      return false;
   }
   sum += arr[n]
path.push(arr[n]);
if (printData(n+1,path,sum) == true){
   return true
}
sum -= path[path.length -1]
path.pop();
if (printData(n+1,path,sum) == true){
   return true
}
return false
}
printData(0,[],0);
 }

 PrintSequence([1,2,3] , 3)