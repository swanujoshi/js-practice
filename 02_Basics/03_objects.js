// singleton
// Object.create

// object literals


// A Symbol in JavaScript is like a special secret name that you can give to an object property.
// Each symbol is always unique — even if two symbols have the same description, they are not the same.
// You can use symbols to store values in objects without worrying that someone else will accidentally use the same property name.
// They are like hidden keys — normal loops like for...in won’t see them.

const id = Symbol("id");
const user = {
  name: "John",
  [id]: 123
};

console.log(user[id]); // 123
console.log(Object.keys(user)); // ["name"] — id is hidden



const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

// The .freeze method in JavaScript refers to Object.freeze(), which is used to make an object immutable. When you freeze an object, you cannot add new properties, remove existing ones, or change the values of its current properties.
// The syntax is: Object.freeze(obj);, where obj is the object you want to freeze.
// Once frozen, the object’s properties become “read-only”— you cannot modify, add, or delete them.

const person = { name: "Alice", age: 25 };
Object.freeze(person);

person.age = 30;        // Does nothing, age stays 25
person.city = "Paris";  // Does nothing, city is not added
delete person.name;     // Does nothing, name stays "Alice"
console.log(person);    // { name: "Alice", age: 25 }



JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());