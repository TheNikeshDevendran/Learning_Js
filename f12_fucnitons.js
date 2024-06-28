function calculate(){
    console.log(2+5);
    return 'done';
}

// if a function is returning some thing then we have to store it in a 
// variable

let num = calculate();
console.log(num)

// what is parameter 
// when an function expect value in it defination block is called parameter

// what is arguments
// while fucntion execution when we pass value to it is called arguments

function CheckLoginStatus(username){//here username is parameter
    console.log(`${username} is logged in`);
}

CheckLoginStatus('Nikesh')//here the given value is arguments
CheckLoginStatus()//if we not pass arguments it become undefined

// working with array and object in fucniton
// here the three dots[...] which we have used is called rest operator
// by this method a single varibale can store multiple value like args method
function AddCartPrice(...prices){
    console.log(prices);
    console.log(Array.isArray(prices));//it will give true because 
    //internally it is storing value as array
}
// AddCartPrice(40,50);


// if i use rest operator in object also it will store multiple
// objects in array 
function GiveObject(...ob1){
    console.log(ob1)
}
// GiveObject({1:1,2:2},{3:3,4:4})

function AmazonPriceCalulator(...prices){
    let Total=0;
    for(price in prices){
        Total+=prices[price]
    }
    console.log(`The Total of purchased product is ${Total}`);
}

AmazonPriceCalulator(20,30,40)
