function Product(name,price) {
    this.name = name;
    this.price = price  
}

function details() {
    console.log(`Name = ${this.name} and Price = ${this.price}`);  
}

p1 = new Product("iphone",1000);
p2 = new Product("mi",2000);


details.call(p1)
details.call(p2);