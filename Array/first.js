// // console.log(3+true);


// // var a=10;
// // const b=2
// // {
// //     const b=3;
// //     let a=20
// //     console.log(a);
// //     console.log(b);
// // }
// // console.log(b);

// // const obj = { name: "John" };
// // obj.name = "Doe";  // Will this work?

// // console.log(obj.name);  // What will this print?
// // let globalVar = "I am a global variable";

// // function outerFunction() {
// //   let outerVar = "I am from outer function";

// //   function innerFunction() {
// //     console.log(globalVar);  // Accesses global scope
// //        // Accesses outerFunction's scope
// //   }

// //   innerFunction();  // Calling the inner function
// //   console.log(outerVar);
// // }

// // outerFunction();

// let str = "Hello World!";
// const str1 = "     Nikhil Singh       "
// // console.log(str.toLocaleLowerCase())
// // console.log(str.toUpperCase());
// // console.log(str1.trim())
// // console.log(str.substring(0,8));
// // console.log(str.substring(5));
// // console.log(str.slice(0,3));
// // console.log(str.slice(-5));
// // console.log(str.indexOf("o"));
// // console.log(str.indexOf("z")); // does not exists thats why the output is -1
// // console.log(str.lastIndexOf("o"));
// // console.log(str.includes("World!"));
// // console.log(str.includes("Earth"));
// // console.log(str.replace("W", "Javascript"));


// // const str2="Nikhil "
// // let arr=str2.split(""); // converts in array from string 
// // console.log(arr.reverse().join().replace(",","")) // join method converts the array into string 

// // console.log(str2.repeat(3))
// // console.log(typeof(str2[3]))


// const str3 = "Ankit";
// {
//     //Strings are immutable that's why this operation can't be performed.
//     str3[0] = "h";
//     // console.log(str3)
// }

// {
//     // that's how the string value changes 
//     const newStr = "j" + str3.substring(1);
//     //   console.log(newStr);
// }

// // match , search 
// const str4 = "This is mine second day in the company"
// // console.log(str4.match(/This/))
// // console.log(str4.match(/this/))
// // console.log(str4.search("day"))
// // console.log(str4.search("z"))

// // codepointat 
// // console.log(str4.codePointAt(3));
// // console.log(str4.charCodeAt(3));

// // let a="5"
// // console.log(a.padEnd(4,"0"))
// // console.log(a.padStart(4,"0"))

// //problem 1
// function reverse(str) {
//     let newStr = ""
//     for (let index = str.length - 1; index >= 0; index--) {
//         newStr += str[index]
//     }
//     return console.log(newStr)
// }
// let input = "hello";
// reverse(input)

// //problem 2
// function palindrome(str) {
//     let new_str = "";
//     for (let index = str.length - 1; index >= 0; index--) {
//         new_str += str[index]
//     }
//     if (str == new_str) {
//         return console.log(true);
//     }
//     else {
//         return console.log(false);
//     }
// }
// let input2 = "king";
// palindrome(input2)

// //problem 3
// function count_vowels(str) {
//     let number_of_vowel = 0;
//     for (let i = 0; i <= str.length - 1; i++) {
//         console.log(str[i])
//         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             number_of_vowel++;
//         }
//     }
//     return console.log(number_of_vowel);
// }

// const input3 = "hello";
// count_vowels(input3);

// //problem 4
// function anagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let sum_str1 = 0;
//     let sum_str2 = 0;
//     for (let i = 0; i <= str1.length - 1; i++) {
//         sum_str1 += str1.codePointAt(i)
//     }
//     for (let j = 0; j <= str2.length - 1; j++) {
//         sum_str2 += str2.codePointAt(j)
//     }
//     if (sum_str1 == sum_str2) {
//         return console.log(true)
//     }
//     else {
//         return console.log(false)
//     }
// }
// const input4 = "listen";
// const input5 = "silent";
// anagrams(input4, input5);

// //problem 5
// function non_Repeating(str) {
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             return console.log(str[i - 1]);
//         }
//     }
// }
// const input6 = "Leetcode";
// non_Repeating(input6)

// //problem 6
// function first_Occurrence(str, needle) {
//     return console.log(str.search(needle))
// }
// const input7 = "indeed";
// const input8 = "ee";
// first_Occurrence(input7, input8);

// //Solution 2 for (problem 6)
// function first_Occurrence(str, needle) {
//     for (let i = 0; i <= str.length - 1; i++) {
//         if ((str[i] + str[i + 1]) === needle) {
//             return console.log(i)
//         }
//     }
// }
// const input9 = "indeed";
// const input10 = "ee";
// first_Occurrence(input9, input10);

// //problem 7
// function prefix(str) {
//     if (str.length === 0) return "NO DATA AVAILABLE"
//     let pre = str[0];
//     for (let i = 1; i < str.length; i++) {
//         while (str[i].indexOf(pre) !== 0) {
//             pre = pre.slice(0, -1);
//             if (pre === "") return "";
//         }
//     }
//     return console.log(pre);
// }
// const input11 = ["Flower", "Flow", "Flight"]
// prefix(input11);

// //PATTERN PROBLEM  
// //Problem 1
// // for(let i=0;i<4;i++){
// //     let row=""
// //     for(let j=0;j<5;j++){
// //        row =row + "*";
// //     }
// //     console.log(row);
// // }

// //Problem 2
// for(let i=0; i<4; i++){
//     let row="";
//     for(let j=0;j<5;j++){
//         if(i==0 || j==0 || i==3 || j==4){
//             row=row+"*"
//         }else{
//             row=row+" "
//         }
//     }
//     console.log(row);
// }

// //problem 3
// let row="*";
// for(let i = 0; i < 4; i++){
// console.log(row)
// row =row +"*";
// }
// //problem 3 solution-2
// for(let i=0; i<4; i++){
//     let row="";
//     for(let j=0;j<=i;j++){
//      row=row+"*";
//     }
//     console.log(row)
// }
// // problem 4
// let row2="****";
// for(let i = 0; i < 4; i++){
// console.log(row2)
// row2=row2.slice(0,-1);
// }
// //problem 4 solution-2
// for(let i=0; i<4; i++){
//     let row="";
//     for(let j=3;j>=i;j--){
//      row=row+"*";
//     }
//     console.log(row)
// }
// //problem 5 
// for (let i = 4; i > 0; i--) {
//     let row3 = ""
//     let m=0;
//     for (let j = 0; j < i-1; j++) {
//         row3 = row3 + " "
//         m++;
//     }
//       while(m<4){
//         row3=row3+"*";
//         m++;
//       }
//       console.log(row3)
//     }

// //problem 6
// for(let i=1; i<=5; i++){
//   let m=1;
//   for(let j=0;j<i;j++){
//    process.stdout.write(m.toString());
//     m++;
//   }
//   console.log("")
// }
// //problem 7
// for(let i=5; i>0; i--){
//   let m=1;
//   for(let j=i;j>0;j--){
//    process.stdout.write(m.toString());
//     m++;
//   }
//   console.log("")
// }

//problem 8
let problem8=1;
for(let i=1; i<=5; i++){
  for(let j=0;j<i;j++){
   process.stdout.write(problem8.toString());
   problem8++;
  }
  console.log("")
}
//problem 9
for(let i=1; i<=5; i++){
  let row="";
  for(let j=0;j<i;j++){
     if((j+i)%2==0){
      row=row+"0";
     }        
     else{
      row=row+"1";
     }
  }
  console.log(row)
}
 

    