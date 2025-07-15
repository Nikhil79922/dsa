let arr = ["nikhil", "ankit", "pawan", "ayush"];

let arr1 = new Array("apple", "banana", "cherry")

// console.log(arr1)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

let emptyArr = [];

// console.log(arr.length)

// arr.push("Raj")
//  console.log(arr)


// arr.unshift("Nilesh")
// console.log(arr)


// arr1.pop()
// console.log(arr1)

// arr1.shift()
// console.log(arr1)

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr1.forEach(element => {
//     console.log(element)
// });

// let upper=arr1.map(Element=>Element.toUpperCase())
// console.log(upper)

// let newarr =arr.slice(1,3);
// console.log(newarr)

// arr1.splice(2,1,"pineapple")
// console.log(arr1)

// console.log(arr1.indexOf("banana"))

// console.log(arr.includes("nikhil"))

// let num=[2,6,8,0,34,2]
// num.sort((a,b)=>a-b)
// console.log(num)

// let num1=[2,7,0,34,77,23]
// num1.sort((a,b)=>b-a)
// console.log(num1)


// const fruits = ['apple', 'banana', 'cherry'];
// fruits.reverse();
// console.log(fruits)

// let nestedarr=[0,[1,2],[3,4,5,6],7,8]
// let flat_arr=nestedarr.flat()
// console.log(flat_arr)

// const fruits1 = ['pineapple', 'banana', 'orange'];
// const [first, second,third]=fruits1;
// console.log(first,second,third);

// console.log(fruits.join(", "))

// const numbers = [10, 5, 2, 8, 1];

// const result= numbers.filter(num=>num>2)
// const result1= numbers.map(num=>num*2)
// const result2= numbers.sort((a,b)=>a-b)

// console.log(result,result1,result2)

// const numbers2=[0,1,2,3,4,5,6]
// let output=numbers2.reduce((a,b)=>{
//     return a*b;
// })
// console.log(output)

// let arr3=[1,1,2,3,4,5,5,6,6,7,8,8,9]
// let unique=[...new Set(arr3)]
// // console.log(unique)

// for(let i of arr3){
//     console.log(i);
// }

// unique.forEach(element => {
//     console.log(element)
// });


// // Questions 1
// function max_min(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//         if (min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return console.log("max value: ", max, "min value: ", min);
// }
// let input = [11, 2, 3, 7, 1, 69, 9, 2, 8, 0, 19];
// max_min(input);


// // Questions 2
// function reverse(arr) {
//     var end = arr.length - 1;

//     for (let i = 0; i <= end; i++) {
//         var temp = arr[i];
//         arr[i] = arr[end]
//         arr[end] = temp
//         end = --end;
//     }
//     return console.log(arr);
// }

// let input1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// reverse(input1)

// // Questions 3
// function overall_Sum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return console.log(sum)
// }
// let input2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// overall_Sum(input2)

// //Question 4
// function second_place(arr) {
//     arr.sort((a, b) => b - a)
//     let second_largest = arr[1]
//     let second_smallest = arr[arr.length - 2]
//     return console.log("second_largest: ", second_largest, "second_smallest: ", second_smallest)
// }
// let input3 = [88, 11, 2, 3, 7, 1, 69, 9, 2, 8, 0, 19];
// second_place(input3)

// //Question 4 (way 2)
// function sec_spot(arr) {
//     var sec_max = -Infinity
//     var sec_min = Infinity
//     let max = -Infinity;
//     let min = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         //maximum
//         if (max < arr[i]) {
//             sec_max = max
//             max = arr[i]
//         }
//         else if (sec_max < arr[i] && arr[i] !== max) {
//             sec_max = arr[i]
//         }
//         //minimum
//         if (min > arr[i]) {
//             sec_min = min
//             min = arr[i]
//         }
//         else if (sec_min > arr[i] && arr[i] !== min) {
//             sec_min = arr[i]
//         }
//     }
//     return console.log("second max value: ", sec_max, "second min value: ", sec_min);
// }
// let input4 = [88, 11, 2, 3, 7, 1, 69, 9, 2, 99, 8, 0, 19];
// sec_spot(input4)
// console.log(1==true)


//Map ds in Js 
// const data=new Map([
//     ["name","nikhil"],
//     [true,1],
//     [1,"number"],
// ])
// console.log(data.set(2,"undertaker"))
// console.log(data.has(2))
// data[true]=(data[true]++ || 0 )+1
// console.log(data)

//Question 5
// function count_frequency(arr){
//     var frequencyMap=new Map();

//     arr.forEach(element => {
//         frequencyMap[element]=(frequencyMap[element] || 0 ) +1
//     });
//     return console.log(frequencyMap)
// }
// let input5 = [1,0,0,0,0,0,0,0,1,1,1,1,1,,1,1,,1,,1,2,12,3,4,4,4,5,5,6,6,6,6,6,7,7,7,7,7,7,7];
// count_frequency(input5)


const car = ["bwm", "swift", "wagnar"]
car.length
let mine_car = car.slice(0, 1)
console.log(mine_car)

car.splice(0, 2, "Urus")
console.log(car)


//   const index=  car.findIndex((item)=>item==="wagnar")
// console.log(index)

// let flatEx=[1,2,3,[4,5],[[6,7],8]]
// // const new_arr=flatEx.flat() // 1 layer 
// const new_arr=flatEx.flat(2) // 2 layer 
// console.log(new_arr)

//Question 6 (rotate the array to the right by K steps)
// function rotate(arr, k) {
//   for (let index = 0; index < k; index++) {
//     let element = arr.pop();
//     arr.unshift(element)
//   }
//   return console.log(arr)
// }
// const input6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] //0,1,2,3 => 9,0,1,2... => 8,9,0,1.....
// const k = 3
// rotate(input6, k)

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);  // Find the middle index 

//     if (arr[mid] === target) {
//       return mid;  // Return the index of the target element
//     }

//     if (arr[mid] < target) {
//       left = mid + 1;  // Target is in the right half
//     } else {
//       right = mid - 1;  // Target is in the left half
//     }
//   }

//   return -1;  // Return -1 if the target element is not found
// }

// // Example usage:
// const arr2 = [1, 3, 5, 6, 8, 10];
// const target = 8;

// const index = binarySearch(arr2, target);
// console.log(index);  // Output: 4 (the index of element 8)


//Bubble Sort 
function bubble(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log("Bubble Sort:", arr)
}
let arr_Bubble = [29, 10, 14, 37, 14]
bubble(arr_Bubble);

//Selection Sort
function selection(arr) {
    let min;
    let index;
    for (let i = 0; i < arr.length; i++) {
        let val = false
        min = arr[i];
        for (let j = i; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j]
                index = j
                val = true;
            }
        }
        if (arr[i] >= arr[index] && val) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }
    console.log("Selection Sort:", arr)
}
let arr_selection = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]
selection(arr_selection);

//Insertion Sort
function insertion(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let sorted = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > sorted) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = sorted
    }
    console.log("Insertion Sort", arr)
}

let arr_insertion = [29, 10, 14, 37, 14]
insertion(arr_insertion);

//two sum
function two_sum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                let result = [i, j];
                return console.log(result)
            }
        }
    }
};

let arr_two_sum = [2, 5, 5, 11]
two_sum(arr_two_sum, 10)

function selection2(arr) {
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    console.log("Selection Sort2:", arr)
}
let arr_selection2 = [-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]
selection2(arr_selection2);

// Merge Sort
function mergeSort2(arr) {
    if (arr.length <= 1) return arr;

    let mid = (arr.length / 2);
    let left = mergeSort2(arr.slice(0, mid));
    let right = mergeSort2(arr.slice(mid));
    return merge2(left, right);
}

function merge2(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        }
        else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right]
}

console.log("Merge Sort 2", mergeSort2([5, 6, 0, 1, 7]))


// 56):- Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. 

var merge = function (intervals) {
    if (intervals.length <= 1) return intervals
    let sortedArr = mergeSort(intervals)
    let resultArr = [];
    let firstSeq = sortedArr[0]
    resultArr.push(firstSeq)
    for (let i = 1; i < sortedArr.length; i++) {
        if (firstSeq[1] >= sortedArr[i][0] && firstSeq[1] >= sortedArr[i][1]) {
            firstSeq = firstSeq;
            resultArr.pop();
            resultArr.push(firstSeq);
            continue;
        }
        if (firstSeq[1] >= sortedArr[i][0]) {
            firstSeq = [firstSeq[0], sortedArr[i][1]]
            resultArr.pop()
            resultArr.push(firstSeq);
        } else {
            firstSeq = sortedArr[i]
            resultArr.push(sortedArr[i]);
        }
    }
    return resultArr;
};

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArray(left, right);
}

function mergeArray(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0][0] <= right[0][0]) {
            sortedArray.push(left.shift())
        }
        else {
            sortedArray.push(right.shift());
        }

    }
    return [...sortedArray, ...left, ...right]
}
console.log("Merge Sort timeline", merge([[0, 1], [4, 5], [0, 2], [3, 4], [2, 4], [0, 0], [3, 5], [0, 1], [0, 0], [5, 5]])) //All test Cases resolved 

//Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log("Quick Sort", quickSort([5, 1, 1, 2, "_", 0]))


var removeDuplicates = function (nums) {
    let first = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == first) {
            nums.splice(i, 1);
        } else {
            first = nums[i]
        }
    }
    return nums
};
console.log(removeDuplicates([1, 1, 2]))


var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            return true;
        }

    }
    return false;
};
console.log(containsDuplicate([2, 14, 18, 22, 22]))



// var isAnagram = function(s, t) {
//    let arr_S= s.split("")
//    let arr_T= t.split("")

//    arr_T.sort()
//    arr_S.sort()

//    console.log(arr_T)
//    console.log(arr_S)
//    if (arr_S.length!==arr_T.length) return false
//    for(let i=0;i<arr_S.length;i++){
//      if(arr_S[i]!==arr_T[i]){
//         return false;
//      }
//    }
//    return true;
// };
// console.log("Strings questions",isAnagram("anagram","nagaram"))


//Alternative way  -----> {possibility that , the sum can be same}
// var isAnagram = function(s, t) {
//    let arr_S= s.split("")
//    let arr_T= t.split("")
//    if (arr_S.length!==arr_T.length) return false

// //    arr_T.sort()
// //    arr_S.sort()
// let S=0;
// let T=0;

// for(let j=0;j<arr_T.length;j++){
//     let code=arr_T[j].charCodeAt(0);
//     S=S+code;
// }
// for(let i=0;i<arr_S.length;i++){
//     let code=arr_S[i].charCodeAt(0);
//     T=T+code;
// }

// console.log("S---> ",S)
// console.log("T---> ",T)
// if(S==T){
//     return true;
// }else{
//     return false;
// }

// };
// console.log("Strings questions",isAnagram("ggii","eekk"))

// var productExceptSelf = function(nums) {
//     let n=nums.length;
//     let result=[];
//     for(let i=0;i<n;i++){
//         var product=1;
//        for(let j=0;j<n;j++){

//              if(i==j){
//                 continue;
//              }
//             product=product*nums[j]

//     }
//     result.push(product)
//     }
//     return result
//     };





// var productExceptSelf = function (nums) {
//     let n = nums.length;
//     let left = [];
//     let right = [];
//     let output = [];
//     left[0] = nums[0];
//     right[n - 1] = nums[n - 1];
//     for (let i = 1; i < n; i++) {
//         left[i] = left[i - 1] * nums[i];
//     }
//     for (let j = n - 2; j >= 0; j--) {
//         right[j] = right[j + 1] * nums[j]
//     }
//     output[0] = right[1];
//     output[n - 1] = left[n - 2]
//     for (let o = 1; o <= n - 2; o++) {
//         output[o] = left[o - 1] * right[o + 1]
//     }
//     return output;
// };
// console.log("leetcode questions 238:", productExceptSelf([1, 2, 3, 4]))  //All test Cases resolved 



// var maxArea = function (height) { //Brute force 
//     let left = 0;
//     let right = 0;
//     let max_water = 0;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             if (i == 1) {
//                 left = height[i]
//                 right = height[j]
//                 let width = Math.max((i - j), (j - i));
//                 let length = Math.min(left, right);
//                 let max = width * length;
//                 if (max > max_water) {
//                     max_water = max
//                 }
//             }
//         }
//     }
//     return max_water;
// };

// console.log("(Approach 1):- leetcode questions 11:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

// var maxArea1 = function (height) { //optimal Solution (Two pointer approach)
//     let n = height.length;
//     let l = 0;
//     let r = n - 1;
//     let max_water = 0;
//     for (let i = 0; i < height.length; i++) {
//         let left = height[l];
//         let right = height[r];
//         let width = r - l;
//         let length = Math.min(left, right)
//         let max = width * length;
//         if (max > max_water) {
//             max_water = max;
//         }
//         if (left > right) {
//             r = r - 1;
//         } else {
//             l = l + 1;
//         }
//     }
//     return max_water;
// };
// console.log("(Approach 2):- leetcode questions 11:", maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]))

// var insert = function (intervals, newInterval) {
//     let n = intervals.length;
//     let startIndex = 0;
//     let verify = true;
//     let endIndex = 1;
//     let Inserted_arr = [];
//     if (n == 0) return [newInterval];
//     for (let i = 0; i < n; i++) {
//         if (intervals[i][startIndex] >= newInterval[startIndex] && verify) {
//             Inserted_arr.push(newInterval)
//             Inserted_arr.push(intervals[i])
//             verify = false;
//         } else {
//             if (n == 1) {
//                 Inserted_arr.push(intervals[i])
//                 Inserted_arr.push(newInterval)
//             } else {
//                 Inserted_arr.push(intervals[i])
//             }
//         }
//     }
//     if(intervals.length==Inserted_arr.length){
//         Inserted_arr.push(newInterval)
//     }
//     let output_arr = []
//     output_arr.push(Inserted_arr[startIndex])
//     for (let j = 0; j < Inserted_arr.length; j++) {
//         if (output_arr[startIndex][endIndex] >= Inserted_arr[j][0] && output_arr[startIndex][endIndex] >= Inserted_arr[j][endIndex]) {
//             continue;
//         }
//         if (output_arr[startIndex][endIndex] >= Inserted_arr[j][0] && output_arr[startIndex][endIndex] <= Inserted_arr[j][endIndex]) {
//             let new_ele = [output_arr[startIndex][0], Inserted_arr[j][endIndex]]
//             if (new_ele[1] >= output_arr[startIndex][endIndex]) {
//                 output_arr.pop()
//                 output_arr.push(new_ele);
//             }
//         } else {
//             output_arr.push(Inserted_arr[j]);
//             startIndex++;
//         }
//     }

//     return output_arr;
// };
// console.log("leetcode questions 57:", insert([[2,6],[7,9]], [15,18]))


// var hammingDistance = function(x, y) {
//     let X=x.toString(2);
//     let Y=y.toString(2);
//     if(X.length>Y.length){
//         while(X.length!==Y.length) Y="0"+Y;
//     }else{
//          while(X.length!==Y.length) X="0"+X;
//     }
//     let distance =0;
//     for(let i=0;i<X.length;i++){
//         if(X[i]!==Y[i]){
//             distance++;
//         }
//     }
//     return distance 
// };
// console.log("leetcode questions 461:", hammingDistance(1,4))



//Leetcode 16
var threeSumClosest = function (nums, target) {
    let len = nums.length;
    let closest = Infinity;
    let totalSum = 0;
    const sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 1; i++) {
        let left = i + 1;
        let right = len - 1;
        while (left < right) {
            let sum = (sorted[i] + sorted[left] + sorted[right])
            if (sum > target) {
                right--;
            } else {
                left++
            }
            if (sum == target) {
                totalSum = sum;
                return totalSum;
            }
            let distance = target - sum;
            if (distance >= 0) {
                if (distance <= closest) {
                    closest = distance;
                    totalSum = sum;
                }
            } else {
                if (Math.abs(distance) <= closest) {
                    closest = Math.abs(distance);
                    totalSum = sum;
                }
            }
        }
    }
    return totalSum;
};
threeSumClosest([10,20,30,40,50,60,70,80,90],1)

console.log("(Approach 1):- leetcode questions 11:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

var maxArea1 = function (height) { //optimal Solution (Two pointer approach)
    let n = height.length;
    let l = 0;
    let r = n - 1;
    let max_water = 0;
    for (let i = 0; i < height.length; i++) {
        let left = height[l];
        let right = height[r];
        let width = r - l;
        let length = Math.min(left, right)
        let max = width * length;
        if (max > max_water) {
            max_water = max;
        }
        if (left > right) {
            r = r - 1;
        } else {
            l = l + 1;
        }
    }
    return max_water;
};
console.log("(Approach 2):- leetcode questions 11:", maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]))

var insert = function (intervals, newInterval) {
    let n = intervals.length;
    let startIndex = 0;
    let verify = true;
    let endIndex = 1;
    let Inserted_arr = [];
    if (n == 0) return [newInterval];
    for (let i = 0; i < n; i++) {
        if (intervals[i][startIndex] >= newInterval[startIndex] && verify) {
            Inserted_arr.push(newInterval)
            Inserted_arr.push(intervals[i])
            verify = false;
        } else {
            if (n == 1) {
                Inserted_arr.push(intervals[i])
                Inserted_arr.push(newInterval)
            } else {
                Inserted_arr.push(intervals[i])
            }
        }
    }
    if(intervals.length==Inserted_arr.length){
        Inserted_arr.push(newInterval)
    }
    let output_arr = []
    output_arr.push(Inserted_arr[startIndex])
    for (let j = 0; j < Inserted_arr.length; j++) {
        if (output_arr[startIndex][endIndex] >= Inserted_arr[j][0] && output_arr[startIndex][endIndex] >= Inserted_arr[j][endIndex]) {
            continue;
        }
        if (output_arr[startIndex][endIndex] >= Inserted_arr[j][0] && output_arr[startIndex][endIndex] <= Inserted_arr[j][endIndex]) {
            let new_ele = [output_arr[startIndex][0], Inserted_arr[j][endIndex]]
            if (new_ele[1] >= output_arr[startIndex][endIndex]) {
                output_arr.pop()
                output_arr.push(new_ele);
            }
        } else {
            output_arr.push(Inserted_arr[j]);
            startIndex++;
        }
    }

    return output_arr;
};
console.log("leetcode questions 57:", insert([[2,6],[7,9]], [15,18]))


var hammingDistance = function(x, y) {
    let X=x.toString(2);
    let Y=y.toString(2);
    if(X.length>Y.length){
        while(X.length!==Y.length) Y="0"+Y;
    }else{
         while(X.length!==Y.length) X="0"+X;
    }
    let distance =0;
    for(let i=0;i<X.length;i++){
        if(X[i]!==Y[i]){
            distance++;
        }
    }
    return distance 
};
console.log("leetcode questions 461:", hammingDistance(1,4))

//LettCode -15
var threeSum = function(nums) {
   const sortedArr = nums.sort((a, b) => a - b);
   let output=[]
for(let i=0;i<sortedArr.length;i++){
    if(sortedArr[i]==sortedArr[i-1]){
        continue;
    }
    let k=sortedArr.length - 1 ;
    for(let j=i;j<sortedArr.length;j++){
        if(k<=j){
            break;
        }
        if(sortedArr[j]==sortedArr[j+1]){
            continue;
        }
        if(sortedArr[k]==sortedArr[k-1]){
             k--;
            continue;
        }
        if((sortedArr[j]+sortedArr[k])==(-sortedArr[i])){
            let result=[sortedArr[i],sortedArr[j],sortedArr[k]]
            output.push(result);
            k--;
        }else{
           if((sortedArr[j]+sortedArr[k])>(-sortedArr[i])){
            k--;
            j--;
           }
        }
    }
}
return output;
};

//Leetcode 16

var threeSumClosest = function(nums, target) {
    
let output = Infinity;
    let sortedArr=nums.sort((a,b)=>a-b);
    let n=nums.length;
    if(n<3) return [];
    for(let i=0;i<n;i++){
        if(i>0 && sortedArr[i]==sortedArr[i-1]){
         continue;
        }
        let left=i+1;
        let right=n-1;
        while(left<right){
            let close=0;
            if( (sortedArr[i]+sortedArr[left]+sortedArr[right])==target ){
                return target;
            }
            else if((sortedArr[i]+sortedArr[left]+sortedArr[right])>target){
                close=sortedArr[i]+sortedArr[left]+sortedArr[right]-target;
                if(i==0){
                    ouput = close;
                }
                if(close>output){
                    output=close;
                    right--;
                    left--;
                }
             
            }
               else{
                
                    right--;
                    continue;
                }
        }
    }
    return output
};
