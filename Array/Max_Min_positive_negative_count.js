// Ques 4: Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.
// Input: nums = [-2, -1, -1,1, 2, 3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.The maximum count among them is 3.

const Max_Min_positive_negative_count = (arr) => {
    return Math.max(upperBound(arr), lowwerBound(arr))
}

function upperBound(arr) {
    let low = 0
    let high = arr.length - 1
    while (low < high) {
        let mid = Math.ceil(((low + high )/ 2))
        if (arr[mid] < 0) {
            low = mid
        }
        else {
            high = mid - 1
        }  
    }
     return arr[0] >= 0 ? 0:low+1
}
function lowwerBound(arr) {
    let low = 0
    let high = arr.length - 1
    while (low < high) {
        let mid = Math.ceil(((low + high )/ 2))
        if (arr[mid] < 0) {
            low = mid
        }
        else {
            high = mid - 1
        }  
    }
     return arr[0] >= 0 ? 0: (arr.length-1)-low
}
const arr=[-2,-1,1,2,3,4,5]
console.log(Max_Min_positive_negative_count(arr))
//Math.floor((( 0+3 )/ 2))=1
//Math.ceil((( 0+3 )/ 2))=2
