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

// class parents {
//     show(){
//         console.log("This is parent area");
//     }
// }
// class child extends parents{

// }
// let awais = new child();

// class company{
//     constructor(color){
//     this.color=color; 
//     }
//     brand="samsung";
//     location="pakistan";
//     show(){
//         console.log(`Made in ${this.location} by ${this.brand} mobile color is ${this.color}`);
//     }
// }
// class A72 extends company{
//     constructor(color){
//         super(color);
//     }
//         model(){
//             console.log("This is A72 Model");
//         }
//     }

// let ph1=new A72("black");

// let studNeme="Awais Azma";
// let age=24;
// let Totalmarks=1100;
// let obtainMarks=960;
// console.log("StudName:",studNeme);
// console.log("Age:",age);
// try{
// console.log("TotalMarks:",Toamarks);
// } catch(err){
//   console.log|(err);
// }

// console.log("ObtainMarks:",obtainMarks);
// let per=obtainMarks/Totalmarks*100;
// console.log( "Persantage is:",per,"%");

// function hello(name,callback){
//     console.log("Welcome " +name+ " ! ");
//     callback();
// }
// function bye(){
//     console.log("Have a nice day...!");
// }
// hello("Awais",bye);

// function getresult(rollno, nextstep){
//     setTimeout(()=>{
//        console.log("Result of",rollno)
//        if (nextstep){
//         nextstep();
//        }

//     },2000)

// }
// getresult(1234,()=>{
//     console.log("Valid Username.......")
//     getresult(1221,()=>{
//          console.log("Valid Password.......")
//         getresult(2223,()=>{
//              console.log("Sucesfull Login.......")
//             getresult(12333)
//             console.log("Show Data.......")
//         })
//     })
// });


// let promise=new Promise((resolve,reject)=>{
//     console.log("This is an example of an promise");

// })
// console.log(promise);



// function getresult(rollNo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("result of student: " + rollNo);
//             resolve("Data found succesfully: " + rollNo);
//         }, 2000)
//     })
// }
// async function result(){
//     console.log("Getting Result 1......")
// await getresult(1);
//  console.log("Getting Result 2......")
// await getresult(2);
//  console.log("Getting Result 3......")
// await getresult(3);
// }
// result();




// getresult(1).then((res) => {
//     console.log("Result Found :", res);
//     getresult(2).then((res) => {
//         console.log("Result Found :", res);
//         getresult(3).then((res) => {
//             console.log("Result Found :", res);
//         })
//     })
// })

// getresult(1)
// .then((res)=>{
//     console.log("Result Found :",res);
//     return getresult(2);
// }).then((res)=>{
//     console.log("Result Found :",res);
//     return getresult(3);
// }).then((res)=>{
//     console.log("Result Found :",res);
// })

// async function myfunction(){
//     console.log("Java Script ");
// }
// myfunction(); 



 function getresult(rollNo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("result of student: " + rollNo);
            resolve("Data found succesfully: " + rollNo);
        }, 2000)
    })
}
(async function result(){
    console.log("Getting Result 1......")
await getresult(1);
 console.log("Getting Result 2......")
await getresult(2);
 console.log("Getting Result 3......")
await getresult(3);
})();
