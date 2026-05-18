//Maximum window substring
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"

var minWindow = function(s, t) {
    let m = s.length;
    let n = t.length;
    let map= new Map();
    for(let ch of t){
        map.set(ch , (map.get(ch) || 0) +1);
    }
let sIndex=-1;
let l=0;
let r=0;
let minLen= Infinity;
let count=t.length;

while(r<m){
    
    if(map.has(s[r])){
        if(map.get(s[r]) > 0){
            count--;
        }
        map.set(s[r], (map.get(s[r])-1))
    }

    while(count === 0){

        if(r-l+1 <minLen){
            minLen= r-l+1;
            sIndex =l;
        }
        
        //Shrink untill snallest window is not found. 
        if(map.has(s[l]) ){
            map.set(s[l], (map.get(s[l])+1))

            if(map.get(s[l]) >  0){
                count++;
            }
        }
        l++;
    }
    r++;
}

console.log(sIndex,minLen);
console.log(minLen === Infinity
    ? ""
    : s.substring(sIndex, sIndex + minLen))
 };

 minWindow("ADOBECODEBANC","ABC")


 //Longest Palindromic Substring
 var longestPalindrome = function (s) {
    let n = s.length;
    let sIndex = 0;
    let maxLen = 1;
    if (n < 2) return s;
    function expands(left, right) {
        while (left >= 0 && right < n && s[left] == s[right]) {
            left--;
            right++;
        }
        let len = right - left - 1;
        if (len > maxLen){
            sIndex= left + 1;
            maxLen= len;
        }
    }

    for(let i = 0; i<n ; i++){
        expands(i,i);
        expands(i,i+1);
    }
    return s.substring(sIndex, sIndex+maxLen)
};