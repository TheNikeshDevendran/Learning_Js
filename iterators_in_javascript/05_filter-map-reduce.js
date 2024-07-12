let numbers=[10,44,99,3,2]

/* now from the above array i want to get only those values which are even
so for that i can filter function  
filter(callbackFcuntion())
*/

let result1=numbers.filter((num)=>{
       return num%2==0;
})//If i do not put return keyword
// when we run this code we will get empty array[] because
//we have to explicitly return the values by applying return statement
//filter do return value by themself
//filter will fetch the values according to the given condition in the 
// functions the original array will not change
console.log(result1);
console.log(numbers);

let employees=[{
    name:'Nikesh',
    role:'FSD',
    salary:2000000
    },
   {
    name:'venkat',
    role:'DataBase',
    salary:2500000
   },
   {
    name:'raman',
    role:'python',
    salary:1500000
   }]

let winner=[];
let qualified=employees.filter((emp)=>{
    return emp.salary>=2000000;
})

console.log(qualified[0].name);




