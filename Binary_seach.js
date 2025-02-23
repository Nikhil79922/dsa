const binary_search = (arr, target) => {
    var start = 0
    var end = arr.length-1
    while (start <= end) {
        var mid = Math.floor((start + end) / 2)
        if (arr[mid] == target) return mid

        if (arr[mid] > target) {
            end = mid - 1
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
    }
}

console.log("9")
console.log(binary_search([1,2,3,4,5,6,7,8,9],3))