const promiseOne = new Promise(function(resolve, reject){
   //Do an Async  task
   // DB calls , cryptography ,network

   setTimeout(function(){
    console.log('Async task is Completed');
    resolve()
   },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Swanand" , email: "swanand@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "swanand" , password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "swanand" , password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try{
            const response = await promiseFive
            console.log(response);
    }catch (error){
            console.log(error);
    }
}

consumePromiseFive()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
