console.log("starting.....");

function fun() {
   
    console.log("inside func function");
 
    return new Promise(function callback(resolve, reject) {
        
        resolve("Harshit")
 
    })
 }

 async function gun() {
    
    console.log("1st line");

    let data = await fun();
    console.log("data = ", data);

    console.log("2nd line");
    return data + " Raj";
 }
 
let x = gun();
x.then((v)=>{
    console.log("printing at 27 ",v);
})


console.log("ending.....");