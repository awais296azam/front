// let button=document.querySelector("button");
// let a =1;
// button.onclick=()=>{
// console.log("Events with DOM properties")
// console.log(a);
// a++
// };

let butrd=document.querySelector("#red");
let body= document.querySelector("body");
let butyel=document.querySelector("#yellow");
let butbl=document.querySelector("#blue");
let butgre=document.querySelector("#green");
let butora=document.querySelector("#orange");
let butwhi=document.querySelector("#white");

butrd .onclick=()=>{
body. style.backgroundColor="red";
}
butyel .onclick=()=>{
body. style.backgroundColor="yellow";
}
butbl .onclick=()=>{
body. style.backgroundColor="blue";
}
butgre .onclick=()=>{
body. style.backgroundColor="green";
}
butora .onclick=()=>{
body. style.backgroundColor="orange";
}
butwhi .onclick=()=>{
body. style.backgroundColor="white";
}