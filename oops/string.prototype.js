let a = "Harshit";

// console.log(typeof a);

String.prototype.greet = function () {
    
    console.log("this is my own function");
}

a.greet();