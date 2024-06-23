// object literal
// An object literal is a simple and straightforward way
// to create an object with properties and methods 

let employee={
    name:'Nikesh',
    age:20,
    email:'Nikesh@email.com'
};
// here interally the key's all are stored as string

// different way to access property of an object
console.log(employee.email);
// in this method as we know the key is stored as string
//  so we can acess its property in this way also
console.log(employee["email"])

// freeze method in object so no value can be modified
employee.email='nike03@emial.com';

Object.freeze(employee)

employee.email='nike007@emial.com';

// here as u can see before freeze we have modified email so that will get reflected in object
// but after the freeze method the email which we have set  that will not get reflected in object
console.log(employee)

let job={
    "Fullstack":150000,
    Backend:120000,
    payslip:function(){
        console.log(` Payslip=${this.Fullstack+this.Backend}`)
    }
}

// here in this job object u can see that i have stored Fullstcak key in string format
// so we cannot able to acess it like this it will raise an error called " NOT DEFINED "
// console.log(job[Fullstack])

// but we can acess it in this format
// console.log(job.Fullstack)
// console.log(job["Fullstack"])

job.greet=function(){
    console.log('hello')
}

console.log(job.payslip())


