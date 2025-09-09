const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

Math.PI = 5
// console.log(Math.PI);


const menu = {
    name: 'Ginger chai',
    price: '250',
    isAvailable: true,

    orderChai: function(){
        console.log("Tea is  not ready");
    }
}

console.log(Object.getOwnPropertyDescriptor(menu, "name"));

Object.defineProperty(menu,'name',{
    writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(menu,"name"));

for (let [key, value] of Object.entries(menu)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}
