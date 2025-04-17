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


     //function binarySearch(arr, target) {
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