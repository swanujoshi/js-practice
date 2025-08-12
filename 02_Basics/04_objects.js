// Creation of and object in 2 ways 
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Swanand"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//Nested object 
const regularUser  = {
    email : "swanand@gmail.com",
    fullname: {
        userfullname :{
            firstname : "swanand",
            lastname  : "Joshi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// multiple object concate and combine
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1 ,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

//spread operator
const obj4 = {...obj1,...obj2}

// console.log(obj4);



// Array of an object 

const user = [

   {
        id: 1,
        email: "a@gmail.com"
   },
   {
       id: 2,
       email: "b@gmail.com"
   },
   {
      id:3,
      email: "c@gmail.com"
   },
    
]

user[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwn('isLoggedIn'));


// Assigning the single varible to access object so it helps in multiple accessing case.( object destructuring)

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "swanand"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


