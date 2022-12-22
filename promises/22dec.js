console.log("start");

function fun() {
   
   console.log("inside func function");

   return new Promise(function callback(resolve, reject) {
       
       resolve("Harshit")

   })
}

let x = fun();

x.then((v)=>{

    console.log("printing value => ",v);

    throw Error

}).catch((err)=>{

    console.log("printing 24 ",err);

    throw Error

}).then((v)=>{

    console.log("printing 27 ",v);

}).catch((err)=>{

    console.log("printing 33 ",err);

}).finally(()=>{

    console.log("finally");
    return "Aditya";

}).catch(()=>{
    console.log("line 42");
})


console.log("end");


// onFullFillMent [fun1(), fun2(), fun3()] = What , when you use it, how you use it