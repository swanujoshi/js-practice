function sayMyname(){
    console.log("S");
    console.log("W");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");  
}
// sayMyname()  // calling the function ()

function addtwonumbers (num1 ,num2){
 
    // console.log(num1 + num2);
    return num1 + num2
    
}

const result =  addtwonumbers(3,5)
// console.log(result);

function LoginUserMessage(username = "sam"){

    if(!username){
        console.log("Please Enter the user name..!");
        return
    }
    return `${username} just logged in` 
}

// console.log(LoginUserMessage("Swanand"));

function calculatecarprice(val1 ,val2,...num1){

    return num1
 
}
// passing to the function is called parameters and when time of calling passing is called arguments
// Dynamically passing the arguments and accessing it by using spread operator
// console.log(calculatecarprice(20,400,500,2000));


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)   //simply calling the function
// handleObject({
//     username: "sam",
//     price: 399
// })                           // Dynamically updating the value by passing the arguments


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
