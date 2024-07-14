//reduce code 
let arr=[2,9,20,500,400,1000,600];
// let max=arr[0];
// console.log(max);
// for(let index=0;index<arr.length;index++){
    // if(max<arr[index]){
    //     max=arr[index];
    // }
// }
// console.log(max);

let max=arr.reduce((acc,cur)=>{
    if(acc<cur){
        acc=cur;
    }
    return acc;
},0)

// console.log(max)

let students=[
    {name:'Nikesh',age:19},
    {name:'venkat',age:35},
    {name:'john',age:45},
    {name:'sam',age:50},
    {name:'mikes',age:22}
]
// desired output {19:2, 21:1 , 20:1 , 22:1}
let output=students.reduce((acc,cur)=>{
     if(acc[cur.age]){
        acc[cur.age]=++acc[cur.age];
     }
     else{
        acc[cur.age]=1
     }
     return acc;
},{})

//from the above array filter the name whose age are <30 and 
// display only their name
let answer=students.filter((current)=>{
    if(current.age<30){
        return current
    }
}).map((data)=>{
    return data.name;
})

// console.log(answer);

// same solution using reduce funciton
let final=students.reduce((acc,cur)=>{
     if(acc.age<30){
       return acc.name;           
     }
},0);

console.log(final)