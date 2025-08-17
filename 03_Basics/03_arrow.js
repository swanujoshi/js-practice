const user = {
    username: "Swanand",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "swaraj"
// user.welcomemessage()

// console.log(this);

// The this keyword in JavaScript refers to the object that is currently executing the code. Its value is dynamic and depends on how and where a function is called, not just how it is defined.


// Types of function declaration


//Method 1
function chai(){
    let username = "hitesh"
    console.log(this.username);
}

// chai()

//Method 2
const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}

//Method 3
const chai = () =>{
    let username = "swanand"
    console.log(this);
}

// chai()