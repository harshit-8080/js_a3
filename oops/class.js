class Category {

    constructor(category){
       this.category = category
    }
}

class Product extends Category{

    constructor(name,price,category){
        super(category);

        this.name = name;
        this.price = price
    }
    
    getDetails(){
        console.log(`Name = ${this.name} and Price = ${this.price} and Category = ${this.category}`);
    }

}


p1 = new Product("IPhone",1000,"mobiles");

p1.getDetails();