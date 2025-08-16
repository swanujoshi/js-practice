// var c = 300 
// let a = 200

if(true){
    let a =10 
    const b = 20 
    var c = 300
}
// console.log(a);
// console.log(b);
// console.log(c);

// var is not commonly used now because it ignores block scope and can cause hard-to-find bugs.
// let and const respect block scope and make your code safer, more predictable, and easier to maintain.

function one(){
    const username = "Swanand"

    function two(){
        const website = "Javascript"
        // console.log(username);
        
    }

    // console.log(website);
    two()    
}

one()
// Variables declared inside a function are only accessible inside that function (local scope).
// Inner functions can access variables from their outer functions due to lexical scoping.
// Outer functions cannot access variables declared inside their inner functions.

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

// Function declarations are fully hoisted (can use them before they’re defined).
// Function expressions assigned to const or let are not hoisted the same way—you can’t use them before the line they're created, or else you get a ReferenceError.
// This demonstrates the difference between function declarations (hoisted: safe to use anywhere in scope) and function expressions (not hoisted: use only after they’re defined).



