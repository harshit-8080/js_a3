function fun() {
    
    var v = 100;
    let n = "harshit";
    function gun(){

        age = 200; 
        console.log(age);
        console.log(v);
        console.log("gun function");
    }

   return gun;

}



var x  = fun();

x();
