const person = {
    name:"harshit",
    age:20,
    address:"chapra"
}

const employee = {
    empId:101,
    salary:1000,
    ...person
}

console.log(employee);

const dummy = {
    dummyID:1,
    ...employee
}

console.log(dummy);


 