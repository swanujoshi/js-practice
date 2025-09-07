// let myName = "Swanand"
// let mychannel = "S&ndJ"

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderman: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.swanand =  function(){
    console.log(`swanand is present in all object`);
}

Array.prototype.heySwanand = function(){
    console.log(`Swanand says hello`);
}

heroPower.swanand()
myHeros.swanand()
myHeros.heySwanand()
// heroPower.heySwanand()