const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (value){
    // console.log(value);     //Way of Function
})

coding.forEach((item)=>{
    // console.log(item);     //Way of Arroww fuction
})

// function printMe(item){
//     console.log(item);
// }

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr); 
} )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageFileName);
} )


// JavaScript forEach Loop

// Purpose:
// The forEach() method in JavaScript is used to execute a function once for each element in an array. It provides a clean, readable way to loop through array elements and perform an action (side-effect) on each—such as logging, updating UI, etc. Unlike other array methods, it does not return a new array and does not modify the original array.

syntax :
// Function
array.forEach(function(currentValue, index, array) {
    // Your code here
}, thisValue);
// Arrow Function
array.forEach(function(currentValue, index, array) {
    // Your code here
}, thisValue);


Example : 
const numbers = [10, 20, 30];
numbers.forEach((num, index, arr) => {
  console.log(`Element at index ${index} is ${num}`);
});

// Element at index 0 is 10
// Element at index 1 is 20
// Element at index 2 is 30

// currentValue	 Required	The current element being processed in the array.
// index	     Optional	The index of the current element.
// array	     Optional	The array forEach() was called upon.
// thisValue	 Optional	Value to use as this inside the callback.
