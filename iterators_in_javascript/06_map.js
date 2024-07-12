let num=[2,3,4,5,6];
let result1=num.map((num)=>{
    return num+1;
})
console.log(result1);
console.log(num);
// map is also similar to filter functions 
// ------------
// CHAINING 
// it is like multiple funcitons applying to an same object or variable

let num2=[1,2,3,4,5,6,7,8,9];
let num2_result=num2.map((numbers)=>{
      return numbers*10;
}).map((numbers)=>{
    return numbers*100;
}).filter((numbers)=>{
   return numbers<5000;
})

console.log(num2_result);