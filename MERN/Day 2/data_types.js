//Data types in js

let x = 5; // number
let y = "Hello"; // string
let z = true; // boolean
let a = null; // null
let b; // undefined
let c = { name: "John", age: 30 }; // object
let d = [1, 2, 3]; // array
let e = function() { console.log("Hello"); }; // function


console.log(typeof x); // number
console.log(typeof y); // string
console.log(typeof z); // boolean
console.log(typeof a); // object (this is a known quirk in JavaScript)
console.log(typeof b); // undefined
console.log(typeof c); // object
console.log(typeof d); // object (arrays are also objects in JavaScript)
console.log(typeof e); // function