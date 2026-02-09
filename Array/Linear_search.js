function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1
}
const arr = [1, 23, 45, 6, 7, 8, 9, 0, 2, 4]
const target = 0
console.log(linearSearch(arr, target))


// when there Target is repeating in the arr then 
const globalLinearSearch = (arr, target) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
           result.push(i)
        }
    }
    if(result.length===0){
        return  -1
    }
    else{
      return  result 
    }
    
}
const arr1 = [1,1,2 ,23, 45, 6, 7, 8, 9, 0, 2, 4]
const target1 = 2
console.log(globalLinearSearch(arr1, target1))
