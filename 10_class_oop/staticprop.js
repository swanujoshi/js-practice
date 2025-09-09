class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const swanand = new User("Swanand")
// console.log(swanand.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const phone = new Teacher("iphone" , "ip@gmail")
// console.log(phone.createId());
