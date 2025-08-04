let name = "Swanand"  // String
let age = 22  //Integer
let isLoggedIn = false //Boolean
null //standalone value  

//typeof = retrun the type the varible

console.log(typeof undefined); // undefined 
console.log(typeof null); // object 
console.log(typeof "Swanand")

// ++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , Heap (Non primitive)
// Primitive  - In primitive data types the copy of and memory is created so when we update any memory the copy gets updated,
let myYoutubename = "Carry minati"
let anothername = myYoutubename
anothername = "chai aurjavascript"
console.log(anothername);
console.log(myYoutubename);

// Non-primitive - In non primitive data types the actual memory is updated.

let userone = {

    email : "swanand20@gmail.com",
    upi : "121223@ybl"
}

let usertwo = userone

usertwo.email ="swaraj28@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

