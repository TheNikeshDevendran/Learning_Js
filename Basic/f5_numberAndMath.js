// numbers and math function
let num1=new Number(500); //here we are creating the number using number class so when we want 
// to use this class we will use new keyword to create an object for the number class so that we can use its methods
// its type will be object not as number

let num2=500; // without using the number class also we can create a number datatype value
// its type will be number
// console.log(num2);
// console.log(typeof num1,typeof num2);

let percent=78.634
console.log(num2.toString(),//it convert from number to string value
           percent.toFixed(),//after decimal how many digit do we want to show and it also does round off
                              //it has range from 0-20
           percent.toPrecision(1),//it also similar to tofixed function it range from 1-21 
           
)

// math
// abs() it make negative value to positive
//round() it will do round off of given number
// ceil() it will take next highest value
// floor() it will take lowest value
// console.log(Math.abs(-2),
//         Math.round(4.9),
//         Math.ceil(4.2),
//         Math.floor(4.6),
//         Math.pow(5,2)


// );

//this random funciton will generate number from 0-1
//when we multiply by 10 the decimal get shifted
//  and when we add it by +1 the zero will not occur because number will start from 1
console.log(((Math.random()*10)+1).toFixed(0))


  