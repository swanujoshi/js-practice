// What is use of call ?

function SetUserName(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username ,email , password){
    SetUserName.call(this , username)
    this.email = email
    this.password = password
}

const snap = new createUser("swanand" , "swanand@gmail.com", "Password")
console.log(snap);
