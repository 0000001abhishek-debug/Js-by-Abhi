"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Abhi")


let name = "Abhi"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//PRATICE 
console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);

console.log(typeof []);
console.log(typeof null); // null bhi ha or object bhi ha js bug ha 
console.log(typeof 123n);

console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean(undefined));


function isEmpty(value) {
  return value === null || value === undefined || value === "";
}console.log(isEmpty(null));      // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(""));        // true
console.log(isEmpty("hello"));   // false


console.log(5 == "5");
console.log(5 === "5");
