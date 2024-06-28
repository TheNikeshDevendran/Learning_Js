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
