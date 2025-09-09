// Getter Setter Method by Class

// class User{
//     constructor(email,password){
//         this.email = email
//         this.password = password
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }

//     set email(value){
//         this._email = value
//     }

//     get password(){
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const swanand = new User("S@swanand.com" ,"abc")
// console.log(swanand.email);

// Getter setter metohd by the function (old)

// function User(email ,password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//            this._email = value
//         }
//     })

//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//            this._password = value
//         }
//     })
// }

// const test = new User("swanand@123" , "swananad")
// console.log(test.email);



// Getter setter by object method

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const test = Object.create(User)
console.log(test.email);