/* falsy values         |    truthy values
 -----------------------|-------------------                      
   false                |       "0"
   0,-0                 |     "false"
   ''                   |      " "
   null,undefined       |      [] , {}
   Nan                  |    function(){}
   
*/

/* let val=[];
let obj={};
if(val.length==0){
  console.log('if array is empty then return True');
}
else if(Object.keys(obj).length==0){
      console.log("if object is empty return true")
}
else{
  console.log('False');
} */

// nullish coalescing operator ??
/* this nullish operator is used to check when we get reposne
   from database and we have to check that wether it got a value
   or null or undefined if this value comes 
   then our code working can change to avoid that 
   we use this nullish operator */

let Db_response = 10 ?? 50; 
//this will save value 10 because it is not null or undefined
// in place of 10 the null or undefined occur then the value 50 get stored

// console.log(Db_response);
let db=null ?? function(){ console.log('db given null so set it as demo')}

console.log(db);