var name = "harshit";

function fun() {
    
    let x = 100;

    // console.log(x);

    function gun(params) {

       // console.log(name);
        let name = "raj";

        function pun() {
            
            let name = "aditya"; 
            console.log(name);
        }

        pun();

    }

    gun();


}

fun();

/**
 jb fun ka mem. phase khatam hua...
    1.  x = 100
    2.  name = undefined
    3.  
 */