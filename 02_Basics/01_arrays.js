// arrays
// Types of array declaration method
const myArr = [0,1,2,3,4,5]
const myHero = ["apple", "banana", "grapes"]
const myarr2 = new Array(1,2,3,4)


// console.log(myArr[1]);


// Array Methods

// myArr.push(6)   //pushing the numberr into array
// myArr.pop()     // poping last element from array

// myArr.unshift(9)  // Adding elemnt in first 
// myArr.shift()     // Removing first element 

// console.log(myArr);

// slice, splice (slice makes the copy of the array , splice make the changes in original array )

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// PS E:\JAVAScript\02_Basics> node 01_arrays.js
// slice
// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// splice
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]