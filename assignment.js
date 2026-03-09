// let newtext=prompt("Enter new text for heading");
// let h1=document.querySelector("h1");
// h1.innerText=h1.innerText+newtext;

let myboxes=document.querySelectorAll(".Boxes");
let no=1;
for(val of myboxes){
val.innerText=`Box No. ${no}`;
no++;
}
