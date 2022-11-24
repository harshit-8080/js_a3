/**
  
 1. status. // pending, resolve, reject

 2. value.

 3. onFullfillment array [] ------>>>>>   [fun1, fun2, fun3] -> is aaray ko aap log access tb hi kr skte ho jb aap promise resolve kro do

 4. onRejection array [].   ------>>>>>   [fun1, fun2, fun3] -> is aaray ko aap log access tb hi kr skte ho jb aap promise reject kro do

 */

 console.log("start");

 function fun() {
    
    console.log("inside func function");

    return new Promise(function callback(resolve, reject) {
        
        setTimeout(function fun() {

            console.log("set time out is done");
            resolve("aditya");

        }, 1000);

    })
 }

let value = fun();

value.then(function fun1(v) {

    console.log("resolved value = ",v);

})

value.then(function fun2(v) {

    console.log("second then = ", v);

})

value.then(function fun2(v) {

    console.log("third then = ", v);

})



console.log("end");