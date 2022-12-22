function Product(name,price) {

    this.name = name;
    this.price = price  
}


p1 = new Product("iphone",1000);

// p1.details();

Product.prototype.details = function(){

    console.log(`Name = ${this.name} and Price = ${this.price}`);  
}

// console.log(p1);
// p1.details();


if(Product.prototype.__proto__ == Object.prototype){

    console.log("hello");
}

else{

    console.log("bye");
}

console.log(Object.prototype.__proto__);