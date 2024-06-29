//Immediately invoked funciton expression [ IIFE ]
// Here when we define the function in this () bracket it will be treat as funciton expression
//so it can execute it immediately 

var portno=8080;
(function DbConnection(){
    var inside_DB_one='one db connection';
    console.log(`Conncted to Database and the port number is${portno}`);

})(); //here the bracket () which we are applying it will execute it
// the variable which we are declared inside this fucniton it will not be used outside the funciton
// console.log(inside_DB_one); //this line will raise error not defined



// but in these function the variable which we have declared it can be acessed
// or modified

// so the benifit of IIFE fucniton ,it prevent the global scope effecting
function DbConnectionTwo(){
    inside_DB_two='db connection two'
}
// DbConnectionTwo()
// console.log(inside_DB_two)



// ----------------------------------------------
// here we ahve declared two IIFE function
//but this will not work because the first IIFE fucniton when executes it does not know the 
// point to terminate or stop execution
(function one(){
    console.log('ONE IIFE FUNCTION');
})(); //so we have to put the semicolon(;) over here

((name)=>{
    console.log(`The username is ${name}`);
})();