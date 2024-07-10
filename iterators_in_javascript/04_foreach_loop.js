let languages=["python","js","cpp","spring"];
let numbers=[200,3,99,100,50,66]

// numbers.forEach( (num) => {
//     console.log(num%2==0? num+" "+"is even":num+" "+"is odd");
// });

let Students=[
    {
        name:'Nikesh',
        age:19,
        subjects:['eng','math','sci']
    },

    {
        name:'venkat',
        age:20,
        subjects:['bio','math','phy']
    },

    {
        name:'sundar',
        age:35,
        subjects:['Ml','math','Ds']
    }
]

/*Students.forEach((data)=>{
      console.log(data.name.toUpperCase());
      let i=1;
      data.subjects.forEach((sub)=>{
        console.log(i+":"+sub);
        i++;
      });
});*/
let i=1;
 Students.forEach((data)=>{
     console.log(`${i}${data.name.toUpperCase()}`);
     data.subjects.forEach((sub)=>{
         console.log("."+sub);
     })
     i++;
 })


