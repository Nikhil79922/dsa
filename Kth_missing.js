const Kth_missing = (arr, k) => {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + count) {
            count++;
        }
    }
    return k + count
}

const arr = [1, 4, 5, 7, 8, 11]
const k = 5
console.log(Kth_missing(arr, k))

//K represent the index of the missiong element 
//Count represent the idnex of the missing element 