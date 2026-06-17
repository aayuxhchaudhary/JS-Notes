//Arrays and Strings

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr[0]); // 1
console.log(arr[arr.length - 1]); // 5

arr.push(6); // adds 6 to the end of the array
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr.pop(); // removes the last element from the array
console.log(arr); // [1, 2, 3, 4, 5]

arr.shift(); // removes the first element from the array
console.log(arr); // [2, 3, 4, 5]

arr.unshift(0); // adds 0 to the beginning of the array
console.log(arr); // [0, 2, 3, 4, 5]

let str = "Hello World, Aayush";
console.log(str.length); // 11
console.log(str[0]); // H
console.log(str[str.length - 1]); // d

console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world 

console.log(str.indexOf("World")); // 6
console.log(str.includes("Aayush")); // true
