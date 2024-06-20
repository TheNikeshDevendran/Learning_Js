//changing value from string to number 
let age="12";
let num1=parseInt(age); //method 1
let num2=Number(age);   //method 2
let num3=parseFloat(age) //method3
// console.table([typeof age,typeof num1, typeof num2, typeof num3]);  

// primitive datatype
// non primitive datatype or reference

// primitive datatype are those value which we get copy of them rather then their
// original value access  and we will able to do the changes in copy and that changes will not get refelected in the original one
//String,number,Boolean,null,
// undefined,Symbol,BigInt

let s1='Nikesh,Devendran';
let s2=s1.toLowerCase()

let s3=true
let s4=String(s3)

let s5=Symbol(123)
let s6=Symbol('abc')
// console.log(typeof s6)
 


// non primitive
// in this datatypes we will get there original state access
// and what ever changes we do it will directly refelect in the original onces
// array, object,function



let heros=['Spidy','Bruce wayne','Superman','Flash']
let obj={
    1:'one',
    2:'two',
    3:'three'
}

let fun=function(){
    console.log('cheers')
}
console.log(typeof (heros),typeof(obj),typeof(fun))


// typeof value :
// null:object
// Array:Object
// Object:Object
// function:function 
    