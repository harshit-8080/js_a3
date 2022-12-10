console.log("start");

function fun() {
   
   console.log("inside func function");

   return new Promise(function callback(resolve, reject) {
       
       reject("this is an error")

   })
}

let x = fun();


// x.then(function fun1(value) {
    
//     console.log("resolve value 1 = ", value);

//     return "adiatya";

// }).finally((v)=>{
//     console.log("finall = ", v);
// })


// x.catch((v)=>{

//     console.log("catch 1 = ", v);
// })


// x.catch((v)=>{

//     console.log("catch 2 = ", v);
// })


console.log("end");


// onFullFillMent [fun1(), fun2(), fun3()] = What , when you use it, how you use it