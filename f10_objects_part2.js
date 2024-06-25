//singleton
// when we create an onject by using an constructor is called singleton
// the working all remain same its an way of creating object

let numbers=new Object()
numbers.id=Math.floor(Math.random()*10)
numbers.name='Nikesh',
numbers.role='FSD'
// console.log(numbers.id)

// Object.assign():if we have multiple object and we want to make them as new object we can use
// this function
let obj1={1:'one',2:'two'}
let obj2={3:'three',4:'four'}
let newObject=Object.assign(obj1,obj2);

// Object.keys(newObject) :gives us only the key from an Object,but it return it in array format
// Object.values(newObject) :gives us only the value from an Object,but it return it in array format

// console.log(Object.keys(newObject))
// console.log(Object.values(newObject))


// spread operator[...]
// instead of using Object.assign() we can use this spread operator 
// it also make multiple object as an single object

let user={
    name:'nikesh',
    degree:'CS'
}

let School={
    schoolName:'pws',
    fees:25000
}

// const NewObject=Object.assign({},user,School) //Object.assign()method
const NewObject={...user,...School,...newObject} //spread operator method  the output remain same
// console.log(NewObject)


// hasOwnProperty() is used to check wether a partical feature or property does it contain
// it return result in boolean
console.log(NewObject.hasOwnProperty('name'))