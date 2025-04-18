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
    let n = arr.length;
    let min;
    let index;
    for (let i = 0; i < n; i++) {
        min = arr[i]
        for (let j = i; j < n - i; j++) {
            if (min > arr[j]) {
                console.log("min",min)
                index = arr.indexOf(min);
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    console.log("Selection Sort:", arr)
}

let arr_selection = [29, 10, 14, 37, 14]
selection(arr_selection);

//Insertion Sort
function insertion(arr){
    let n=arr.length;
    for(let i=)
}