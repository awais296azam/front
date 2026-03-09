// console.log (window.document.body);
// console.dir (window.document.body.childNodes);

// let heading=document.querySelector("h1");
// console.log(heading.getAttribute("id"));

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));
// para.setAttribute("class", "my new class")
// console.log(para.getAttribute("class"));

// let butt=document.querySelector("button");
// console.log(butt.getAttribute("id"));

// let div=document.querySelector("div");
// div.style. backgroundColor="aqua" ;

// let para=document.querySelector("p");
// para.style.color="White";
// para.style.fontSize="30px";

// let button=document.querySelector("button");
// button.style.backgroundColor="purple";
// button.style.color="yellow";
// button.style.visibility="hidden";

// let h2=document.createElement("h2");
// h2.innerText="lahore,pakistan";
// document.querySelector("div"). append(h2); 

// let para=document.createElement("p");
// para.innerText="This is new para";
// document.querySelector("p").append(para);

// let button=document.createElement("button");
// button.innerText="Download";
// document.querySelector("div").append(button);

// let nweHead=document.createElement("h2");
// nweHead.innerText="With Awais Azam";
// document.querySelector("div").after("newHead");

// let nweHead=document.createElement("h2");
// nweHead.innerText="With Awais Azam";
// document.querySelector("div").before("newHead");

// h2.remove();

let newPara=document. createElement("p");
newPara .textContent="this text is created dainamicly";

let body=document.querySelector("body");
body.appendChild(newPara);
console.log(newPara);
console.log(body);