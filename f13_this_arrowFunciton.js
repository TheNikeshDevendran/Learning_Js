function demo(){
    console.log(this);//here the this keyword will work on the context
    // of funciton that mean this will reffer the data on current 
    // working fucnitons or data
    // here it is working in funciton so it will refer funcitons
}

let ar=[this]
let obj={1:this}
// demo()
console.log(ar)//this will give empty object
console.log(this)//this will give empty object
console.log(obj)//this will give empty object

let employee={
    name:'nikesh',
    role:'FSD',
    Display:function(){
        console.log(`The username is:${this.name}`);
        //while i am using this in an object it will refer that 
        // particular object data
        return ' '
    }
}

// console.log(employee?.name)
// console.log(employee.Display())

// arrow function is also similar like normal fucniton it is an another
// way of declaring function
// here we do not use function keyword

let great=()=>{
    console.log('Hi Welcome to Learning_Js repo')
    console.log(this)//in arrow funciton also this will not work
}


// another way of declaring arrow function
let great2=(num1,num2)=>(num1+num2) 
//here this great2 function will automaticaly know that it 
// should return the value when we put it in the brackets
// so here we can avoid putting {} curly bracket 
// it do not require return keyword
// but when we use {} curly bracket it require return keyword to 
// return a value it will not return it automatically as () this 
// round bracket does

console.log(great2(1,2))
console.log(great())

