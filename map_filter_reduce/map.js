let arr = [10,20,3,40,5];

console.log(arr);

let a = arr.map(function(val){

    return val = val + 10;
})

console.log(a);

let a2 = arr.filter(function(val){

    if(val % 2 == 0){
        return val;
    }
})

console.log(a2);



let sum = 0;
let a3 = arr.reduce(function(sum ,val){
    return sum + val;
},0);

console.log(a3);