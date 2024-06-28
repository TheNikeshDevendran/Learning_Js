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
        console.log(`The usernem is:${this.name}`);
        //while i am using this in an object it will refer that 
        // particular object data
    }
}
