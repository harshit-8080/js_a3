function fun(name,callback1, callback2) {
    
    console.log("inside fun function");

    let fullName = callback1(name);
    callback2(fullName); 
    console.log("about to leave inside function");

}

fun("Harshit" , function SetName(FirstName) {
    
    let fullName = FirstName + "Raj"
    console.log("Setting your FirstName and adding lastName");

    return fullName;


},function show(fullName) {

    console.log('YOUR FULL NAME = ',fullName );
})


