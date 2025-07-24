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