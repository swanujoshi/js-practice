## 1) What is a Promise?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

A Promise can be in three states:
Pending: Initial state, neither fulfilled nor rejected.
Fulfilled (Resolved): Operation completed successfully → resolve().
Rejected: Operation failed → reject().


## 2) Creating a Promise
const promiseOne = new Promise(function(resolve, reject){
  // Asynchronous task
  setTimeout(function(){
    console.log('Async task is Completed');
    resolve(); // moves promise from Pending → Fulfilled
  }, 1000)
});

The executor function takes two arguments:
resolve() → called when the task is successful.
reject() → called when the task fails.

## 3) Consuming a Promise
promiseOne.then(function(){
   console.log('Promise Consumed');
});

.then() runs when the promise is resolved.
Promises allow chaining multiple .then() blocks.

## 4) Promise Example with Data
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Swanand", email: "swanand@gmail.com" });
  }, 1000);
});

promiseThree.then(user => {
  console.log(user); // Access object returned from resolve
});

Here, the promise returns an object, which is received inside .then().

## 5) Error Handling in Promises
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "swanand", password: "123" });
    } else {
      reject("ERROR: Something went wrong"); // triggers rejection
    }
  }, 1000);
});

promiseFour
  .then(user => {
    console.log(user);
    return user.username;
  })
  .then(username => {
    console.log(username);
  })
  .catch(error => {
    console.log(error); // handles rejection if any
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

.catch() handles errors (if promise is rejected).
.finally() always runs, regardless of success or failure (cleanup).

## 6) Async/Await (Cleaner Syntax)
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "swanand", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // wait until resolved/rejected
    console.log(response);
  } catch (error) {
    console.log(error); // handles rejection
  }
}

consumePromiseFive();

async functions make asynchronous code look synchronous.
await pauses execution until the promise settles.

## 7) Fetch API

fetch('https://api.github.com/users/hiteshchoudhary')
  .then(response => {
    return response.json(); // returns another promise
  })
  .then(data => {
    console.log(data); // GitHub user data as JS object
  })
  .catch(error => console.log(error));

fetch() is a modern API for making HTTP requests.
Returns a promise that resolves with a Response object.
response.json() converts the response body into a usable JavaScript object.
Chained .then() is used to consume the result.
.catch() handles errors like network failure.


