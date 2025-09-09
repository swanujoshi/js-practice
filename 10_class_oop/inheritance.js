class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);        
    }
}

class Teacher extends User{
    constructor(username ,email ,password){
        super(username)
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added bt ${this.username}`);
        
    }
    
}

const dept = new Teacher("swanand", "swanandjoshi@.com" ,"123")
dept.logme()

const  principal = new User("Vaishali Patil")
principal.logme()

console.log(dept instanceof User);
