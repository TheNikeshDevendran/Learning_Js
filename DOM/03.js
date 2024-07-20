// DOM
let s1=document.getElementById("h1");
// getElementById() 
// The ID which we are passing it will select the entire html tag ,
// attributes and content in it
console.log(s1);
//querySelector
// We can select the element by id or class  
//It also give the output same as getELementById()
let s2=document.querySelector("#h1")
console.log(s2);

// s2.innerHTML;
/* If we have a  div which has h1 tag and inside it has some bold tag and some Text
so when we use innerhtml it not only displays the data but it also display that internal tag 
which have bean used  and also display the hidden data 
<div>
    <h1> hello <b>js</b></h1>
</div>

*/

//s2.innText 
// will diplay the available text only if some data are hided then they will not be visible by it

// s2.textContent 
// will display the available text and alos display those hidden text



