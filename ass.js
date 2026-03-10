// let button=document.querySelector("button");
// let div=document.querySelector("div");
// let age=document.querySelector("input");
// let reset=document.querySelector("#reset");

// button.onclick= () => {
//     let month=age.value  * 12 ;
//     div.style.visibility="visible";
//     reset.style.visibility="visible";


//     div.innerText=`Age in Months: ${month}`;
// }
// reset.onclick=()=>{
//     div.innerText=""
//     div.style.visibility="hidden";
//     age.value="1";
//     reset.style.visibility="hidden";
// }

// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//     console.log("This is event listner finction")
// });

// button.addEventListener("click", () => {
//     console.log("This is event listner erro finction")
// });

// let funct = () => {
//     console.log("This is external function message")
// }

// button.addEventListener("click",funct);

// button.removeEventListener("click",funct);

// let dark = document.querySelector("#dark");
// let light = document.querySelector("#light");
// let body = document.querySelector("body");

// dark.addEventListener("click",()=>{
//     body.style.backgroundColor= "black";
// }); 

// light.addEventListener("click",()=>{
//     body.style.backgroundColor="white";
// });

// let dark=document.querySelector("#dark");
// let body=document.querySelector("#body");

// let col="dark";

// let change=()=>{
//     if(col==="dark"){
//         document.body.style.backgroundColor="white";
//         col="light";
//         dark.innerText="Dark";
//          }
//          else{
//   document.body.style.backgroundColor="black";
//         col="dark";
//         dark.innerText="light";
//         }
// }
// dark.addEventListener("click",change);

class parents {
    show(){
        console.log("This is parent area");
    }
}
class child extends parents{

}
let awais = new child();