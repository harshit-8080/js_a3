

function Product(name,price) {
    
    console.log("printing this ==> ",this); // what 

    this.name = name;
    this.price = price;

}

p1 = new Product("iphone",2000);

console.log(p1);

/**
  step 1  => {}
  step 2  => some kind of linking (later) 
  step 3  => call constructor with this keyword
  step 4  => return "this" keyword in case if you dont return anything from function except if you return an object.
 */