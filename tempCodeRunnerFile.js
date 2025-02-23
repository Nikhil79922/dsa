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