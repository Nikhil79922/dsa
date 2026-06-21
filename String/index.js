// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

/*
Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:

Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
The prefix and the suffix should not intersect at any index.
The characters from the prefix and suffix must be the same.
Delete both the prefix and the suffix.
Return _theminimum length of _s after performing the above operation any number of times (possibly zero times).
*/

function findString(s){
    let n = s.length;
    let left =0;
    let right = n-1;
 while (left < right && s[left] === s[right]) {
        let ch = s[left];

        while (left <= right && s[left] === ch) {
            left++;
        }

        while (left <= right && s[right] === ch) {
            right--;
        }
    }
    
    if(left<right){
        return right - left +1;
    }
    return -1;
}
console.log("Start small. Ship something.",findString('aabccabba'));