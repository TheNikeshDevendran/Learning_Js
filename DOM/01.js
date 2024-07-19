// DOM(DOCUMENT OBJECT MODEL)

// Selectors
pg=document.getElementById("para");
pg.innerHTML="<h1>HELLO HTML BY JS... </h1>";

pg.getAttribute("id");
//getAttribute() is used to get the attribute of a tag in html
document.write(pg.getAttribute("class"));
pg.setAttribute("class","p2");
//setAttribute overwrite the existing class and add this new class
// so here in paragraph tag we have para1 class:
//but when we use setAttribute it overwrite 
{/* <p id="para" class="para1">Hello js</p> */}

/*
innerHTML:Include html tags and content 
innerText:Include only content and ignores html tags
textContent:also same as innerText 
*/


