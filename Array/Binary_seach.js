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



process.stdin.resume();
process.stdin.setEncoding("utf-8");

let stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

class Solution {

    findTime(arr, k, t) {

        let low = Math.max(...arr);

        let high = arr.reduce((acc, curr) => acc + curr, 0);

        while (low <= high) {

            let mid = Math.floor((low + high) / 2);

            let painters = this.countPainters(arr, mid);

            if (painters > k) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return low;
    }

    countPainters(arr, limit) {

        let painters = 1;
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {

            if (sum + arr[i] <= limit) {
                sum += arr[i];
            } else {
                painters++;
                sum = arr[i];
            }
        }

        return painters;
    }
}

function main(input) {

    input = input.trim().split("\n");

    let [n, k, t] = input[0].split(" ").map(Number);

    let arr = input[1].split(" ").map(Number);

    let sol = new Solution();

    console.log(sol.findTime(arr, k, t));
}