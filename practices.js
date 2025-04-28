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
            let val=false
            min = arr[i];
            for (let j = i; j < arr.length; j++) {
                    if (min > arr[j]) {
                        min = arr[j]
                        index = j
                        val=true;
                    }
            }
            if (arr[i]>=arr[index]&&val){
                [arr[i], arr[index]] = [arr[index], arr[i]];
            }
    }
    console.log("Selection Sort:", arr)
}
let arr_selection = [-4,0,7,4,9,-5,-1,0,-7,-1]
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
    for(let i=0;i<nums.length;i++){
        for (let j=i+1;j<nums.length;j++){
            if((nums[i]+nums[j])==target){
                let result=[i,j];
                return console.log(result)
            }
        }
    }
};

let arr_two_sum = [2,5,5,11]
two_sum(arr_two_sum,10)

function selection2(arr) {
    let min;
    for (let i = 0; i < arr.length-1; i++) {
        min = i;
        for (let j = i+1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
             min=j
                }
        }
        if (min!==i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
}
console.log("Selection Sort2:", arr)
}
let arr_selection2 = [-4,0,7,4,9,-5,-1,0,-7,-1]
selection2(arr_selection2);

// Merge Sort
function mergeSort2(arr){
    if(arr.length<=1)return arr;

   let mid=(arr.length/2);
    let left=mergeSort2(arr.slice(0,mid));
    let right=mergeSort2(arr.slice(mid));
   return merge2(left,right);
}

function merge2(left, right){
    let sortedArr=[];
    while(left.length&&right.length){
    if(left[0]<right[0]){
        sortedArr.push(left.shift());
    }
    else{
        sortedArr.push(right.shift());
    }}
    return [...sortedArr,...left,...right]
}

console.log("Merge Sort 2",mergeSort2([5,6,0,1,7]))


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
console.log("Merge Sort timeline",merge([[0, 1], [4, 5], [0, 2], [3, 4], [2, 4], [0, 0], [3, 5], [0, 1], [0, 0], [5, 5]])) //All test Cases resolved 

//Quick Sort
function quickSort(arr){
    if(arr.length<=1) return arr;
    let pivot=arr[0];
    let left=[];
    let right=[]; 
    for(let i=1;i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log("Quick Sort",quickSort([5,1,1,2,"_",0]))


var removeDuplicates = function(nums) {
    let first=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]==first){
           nums.splice(i, 1);
        }else{
            first=nums[i]
        }
    }
    return nums
};
console.log(removeDuplicates([1,1,2]))


var containsDuplicate = function(nums) {
    nums.sort((a,b)=>a-b)
        for(let i=0;i<nums.length-1;i++){
                    if(nums[i]==nums[i+1]){
                        return true;
                     }
           
        }
        return false;
    };
console.log(containsDuplicate([2,14,18,22,22]))



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

    var productExceptSelf = function(nums) {
        let n=nums.length;
        let left=[];
        let right=[];
        let output=[];
        left[0]=nums[0];
        right[n-1]=nums[n-1];
        console.log("right----->",right)
        for(let i=1;i<n;i++){
            left[i]=left[i-1]*nums[i];
        }
        console.log("left----->",left)
        for(let j=n-2;j>=0;j--){
            right[j]=right[j+1]*nums[j]
        }
        console.log("right----->",right)
        output[0]=right[1];
        output[n-1]=left[n-2]
        for(let o=1;o<=n-2;o++){
            output[o]=left[o-1]*right[o+1]
        }
        return output;
        };
 console.log("leetcode questions 238:",productExceptSelf([1,2,3,4]))  //All test Cases resolved 



 var maxArea = function(height) { //Brute force 
    let left=0;
    let right=0;
    let max_water=0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            if(i==1){
            left=height[i]
            right=height[j]
    let width=Math.max((i-j),(j-i));
    let length=Math.min(left,right);
           let max=width*length;
           console.log("Areas------->",max)
           if(max>max_water){
            max_water=max
           }
        }
        }
    }
    return max_water;
    };

    console.log("leetcode questions 11:",maxArea([1,8,6,2,5,4,8,3,7]))













    //Donrifa :- 
    eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.P8bJi3zq6a2xmgDGrLBUf2yls8HITWplv9HT6Inf5dg4ClRJtxD7OYZvEWf1x4f2SZtLbpEhLS4VUjxU38LNFftLvX_r4UhSOVt07RxaGT4UJ4MEsFJGq55X-RS7M-lSVgFgr4qBB6k1eyROgDxVkNF2kvFj0-WbZanjLKp4Tas.RPwFja6NMkuI_tnH._HhRzlZg4X7jaZt8jTvlMEPtNumC0m7gp4MXIEXsMPSdFtTBgdPIAAS416Q9Yp44NlUsfuGHJVMpE5zmDGJJIwmuHbe4YU5nPu3bCVkuUjq443JsGRTKgjV3o3scJA8SOtEfQhRbLdxBFWd3pkxbD2LBg6dOe6myzIUmyaYyNG2icxuS41m6OcEe6H49MHkGGuLc4YiO_7Lf6gJylQbUiQQV36olN4nYAPgARhdKYwiL1yGU77-KJOshjh9d8NSCIvjw8D53hp9nZ7i_K5jtLKGsw66q8hdjDEyjsx9VA12KUUxIgBWoTauDfnqppwuftOs9lS6mgH1OE22Nt1QRPiaajQwBvf_B6rPmtKPh2_Fcw5TyuJ92Os1y28CISoqrILEg0OJ1nq0XlN-gBhV0lt0-BnxRbi763kieFydVv674TopzwBXlyEP4XPiRaLv2fJqG3fLsZyvXFpvCHbHVKt9J-BzibcTToUwGzs7a0_Ir0lw9YlpdCqFv4kF_0SXaVgn8QMaJ1vK80tH6K9__zK73k3ai2AEp5Ms_q_Zv71eXojvtzgjTvEaU1Ic8LjGXaOcUmTgx5rFwaH0AFkKTUFVPwXnqq5vovjaCqeYl1BGurlID7d08axqboEfsy0eN0MD6zm4v7n5Ohw84GSYUgnLfOGEfsFMBownr6Us5_CoQBjh6d37a-k6lJY8b2TXFesifIBCkE_LovqZCpfP_IbgMxf5GbzZ8NzryKX0JaMXWndpXdbVf8hq3FJ7SAjnABNv0AUh1ILOAVc0_C44B3ISjtZxteGBpKleRbwPjokuZfmrY.rw7G2Exlk6qT0jAW7gxDJA


    eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.HGA5QfdciSYrs6s8lwekh-cfq9Om3PuriNVX6seoOwt-XIYPNgG8FlJ7R5bR79MlltrsfrYQiHei5M1681tcX_TrRBEgPStZIfG5nx8djpvHtl9etb-q5SwZeru_3MgVrtfmU5cWmhnn50wxrIClGXSrw6766acpzAgX0Eyufxk.U358egGSiKdltaJG.VuYtcFF_rRgsK8FRY--jJiALl0hqiamsJbmjsc4mXb-uCCmvHhXlPF-FXf4137EXlOHHMcui4tvdWUAqgp6Mv39GQs0boCKkFxNbX1qaC6Uvjt1Fqha-WGoVJefF-qO6kkBnlGv7BolQXVTxe9E7bda1nz_IWkiUSlbbZulAvbctK7N9JnJpbbqJCgh7_JGz_bJB7l_mdBfakD5RdxUms6g_XPfAy9peM6D43SEvd345zDvq8E5g3_dEncV6zdJBjYGwaZVSOdTl_zbJZ6uIPIvktrrwma1AxWMggmh-rn9eBEX9b40baABfwB107Oxr8fyVu9oOwpCb5digsqdMWaTttAYiuyBHzzXp1CUHuFSFTa-iQIvspQaOyWRVkdISTGGVtTNPfiimNItCxJMqzhTYdKJRCmZLIqDlgZKPM6bqYRTdstfiqAHIAxzzn6dqFySvFaH7A-QztTWhu3KaywPDYQKD_4ERgFV6SqtLfyJUNYhI-yPPo2mb-tK1Yv_EmXPw2391OCzJ_Cpe9wJmPiZx-a3LPtGfi7GJRtKG2dhPdsIg4lnKrIusYWg2hDnsBwMppt4X09FzJAve6Bc2YMPy-RasQvjSXXgTC0KVtQpe-XGWmiShjjkD5J-ogHm77avb6Aeck0eWwXNRJWHvrNGg1tNJ7sETtkumgA2BrxSKH0VIEku-XfX09u3nMrM-2vepecTlpbnMRPkcPZu9xAYD0mFPc559jS0e_JXHp3Zp4CHurMNb9-bze8wMhzqzVfD-lM3QuFgrM-f5TEEDQQzrKGeV0EKFswryQkvazDb8DEQFAowDLYsr6LBlNXv5-5C98GRGoL6z-CxRmK0BgNmOymflwDYzbVkyuc-F6fNXun4EXPRmyVvW3P7tQ1vHJXkFpq7gkB3Hzc3attjc_5ug2k45vOCn1uU1ONt0LJmR4gtelWsJS0MpoHLAbUs3UWCgGYCYoooU7x6moB29ZlJPdl84iOxjPHwNHP1Z6eZlEgUVy5dUD3i4YL1tbisY0BywnVlPkFWoR8D49uphdQrW1GKx7cgAeLayhiXTgLIQ5SdkS06R.QticO13VJk6m-pQgk7YJqA

    eyJhbGciOiJSU0EtT0FFUCIsImN0eSI6IkpXVCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV1QifQ.ZHayvED5ucX9uI4HhyrDcFXS6vIN7sLdXCK0FkM_wrp2xz8XOASo0qc0Y5D8wfW-YpDcTVwc1Mmm3ZHt9BeoBEJCnobIb6uNEdOeweSWeEd3I3jPAnrApa887psOGWD24d9SgQ4wZhNG2mB85kMtksphy4cuj8CJqiv2autcEgI.9bQZhlNZzzX_oQ9j.lIZ3xs6PHpF6RjDUi7IKXfHSMNOiKNL_67u-Zv7ibjXrMSpfrzCwwj9WSHy09vwMqiwqhfILhr2F2YPva1tPkx1fVp0I-1ofmlXOtIkGQdjMdpCSQ4I6caDaXtd15Yy802Br_At7XysbI3-iqdCe0MiSq4hzc6Xu6dzfXx4XTw8sJFPJ8cT6qy1JSnteEogMgsvuacANKE_5rjieadsaWXA_OH_fnzdcXco4u-ckIhNLCxpCSIagojtKTEmSFM9E_vAm1zczASfz2remsJy5c0aSDqyJivCVJGNkvEN0ilHqC4rw14TFRT2RUmjMLP69ub830nHGcr9PnTm7Ox16jGzmACJ1Qjpn_lKMWPx65MuRbDfELkyZ2fgpsZ8ygZSBvahx8htjc7gq-PPEqiRvd3qE_NkSxHeCwio49oM_JTkT4tK29CV1gE4LUlECM1ytJU5FduBaSfjwY4O5uFqkxx1sQqBKA3caCnDDO4AyVxXHRLySMb_2K6TYNsx3z73FGY8W-nu7NxSh6AnqJrysPEfLitTPTJnIuN8FEoflNMX5uur5QOno8lDMte5TAy_19c6EOk710Q3UX0CJIpI58Hr1ykuJObeDT7SKjNWYJiOwzYoPVQdFQIiSxld8SlJTKPw8QkD7jKX3KTnSDl-pVDXgrUKbLQkOSv58C0147DpBtNEXPQqP70FPxLMPkXrZh4vb9P7RuFVfJNiUsTyj9m7sL8KGT1fvXcn2E-3K8wzh1qwpgh4flGJlRoei0K5QUTI9mK3UB92J6ZfrRgqcp1I9poFVFR9VOnhAPu4T5837WctxpzhJE7aXRafN_aFptLudX-0OTzXkpo_8ao35t3DzCkTdKP22Rw2Gq62FtU2vEwwIvNdRnrju1DuxlVA9bWjaKA21dQ1xJ2lDbAjWgJTfSiOeNTTvBPsKXSF4j8SY5z1smUOqqnwM9dxthxnHFwTgCWRPAnWZC4ZgdXNXp75Yl0fX8d8OiS0NwYA9QYFxGCoZsaOcDbTUVPoSsKb0G0sRlKUU08A7coRTc4RWeQg9zjeyIwma45pv-ZMbjIlOlI8YJv5VnWHKjF_Av95-ECf5zZjz1RUxUIFvZ44pjktSXqRP-8IAbn6fRiE0B3upaOLDnjXEPcVpVGFetptwWZxvEfpNBSfxgfv1oSGTRhEDWNr21RxoW7Ezs-NB74T5ZGTXzkN6twS-zvNiGGth-mgI0vTjWOSbszXXLAa61SpmOmC200yW9IP_8qDAVKg5uNGclgUObpyZ44XMOhrx44zGgkMpBRObdfwW7Yp5UZoUGXVXdoevAtVJiho6cRaODpt26RydQCypnSSQa2uaxUfFCNiblhVTuYbY3cJdxlGdQDIQqvm0BcC_Xr78Ij8QXGVi6Y5Sf4RceK_jBlB54cS7Urg35BHGXVirxzZNLxWs_93t9DnLnlx8HPQb8pU5cR7tc1cmqlu5jhvuo_vMcVH58sXHZ-pgXNVSULz0XzG2d8OCclRlEsOpUvYXiexp37l525aGmz0f_EWAIs6j9T492gUAZMRktlc_VW97Jou9dfz95Zakq5_oMA4TvKxJmyPSCVQgPeGl22CuWiBm-H_WBi-iVYUqBTUPlQcta8H-LQjMfov84e3hI46K6PuMO5gkxWql6RsxgsHhMpIzo_OJPXNWgBwTPKKGpDtF7IeSodfENvAZsjnnXVp_RrAQ9DP9eC89_VireDW1Bv3xtXbezCqqxseYzAzy_hmUKS0DdPvks3FBXUKA3A.A-Fik042eJ1AOP9eikrfhA