// // let sec = document.querySelector(".sec-input")
// // sec.setAttribute("class","thed")
// // sec.className += " thed"

// // setTimeout(() => {
// //     sec.className += "thed"
// // }, 5000);

// // console.log(sec);

// let divelm = document.querySelector(".sec-input");

// let showbtnel = document.querySelector("#showbtn");

// showbtnel.addEventListener("click", () => {
//   if (divelm.style.display === "none") {
//     showbtnel.innerText = "Hied div";
//     divelm.style.display = "block";
//   } else {
//     divelm.style.display = "none";
//     showbtnel.innerText = "show div";
//   }
// });

// // onclick="alert('HI I AM PRANAVAMUTHU')"
// // style="
// //   color: whitesmoke;
// //   background-color: royalblue;
// //   padding: 5px;
// //   margin: 5px;
// //   border-radius: 5px;
// //   font-size: 20px;
// // "

// // let setonclick = document.querySelector("#head_food span");
// // console.log(setonclick);

// // setonclick.setAttribute(
// //   "style",
// //   " color: whitesmoke; background-color: royalblue;font-size: 20px; padding: 5px;margin: 5px; border-radius: 5px;"
// // );

// // setonclick.setAttribute('onclick','alert("HI I AM PRANAVAMUTHU")')

// // let setonclick = document.querySelector("#head_food span");

// // console.log(setonclick);

// // setonclick.onclick = function (){

// //       alert("HI I AM prthu")

// // }
// // let setonclick = document.querySelector("#head_food span");

// // function handler(){
// //       alert("hi i am pranavamuthu PHD from amarica")
// //       alert("hi i am pranavamuthu PHD from amarica")
// //       alert("hi i am pranavamuthu PHD from amarica")
// //       alert("hi i am pranavamuthu PHD from amarica")
// // }

// // setonclick.addEventListener("click",handler)

// let setonclick = document.querySelector("#head_food span");

// handler = (event) => {
//   alert("hiii");
//   console.log(event.target);
//   // setonclick.removeEventListener("click", handler);
// };

// setonclick.addEventListener("click", handler, { once: true });

// // setTimeout(() => {
// // setonclick.removeEventListener("click", handler);
// // }, 5000);

// let formel = document.querySelector("form");
// let divel = document.querySelector("form div");
// let pel = document.querySelector("form p");

// // console.log(formel,divel,pel);

// // formel.addEventListener("click",(event)=>{alert("FORM")
// // console.log(event.target);
// // })

// // divel.addEventListener("click",(event)=>{
// // alert("DIV")

// // //  event.stopPropagation();
// // event.stopImmediatePropagation()

// // })
// // pel.addEventListener("click",(event)=>{alert("P")})

// // divel.addEventListener("click",(event)=>{
// //   alert("DIV-new")

// //   })

// // for (const elam of document.querySelectorAll("form, form *")) {

// //  //capturing phase
// // elam.addEventListener("click" , ()=>{

// //   console.log(`capturing :${elam.tagName}`);

// // }, {capture:true})

// // elam.addEventListener("click",()=>{

// //   console.log(`Bubblig :${elam.tagName}`);

// // })

// //

// const posisition = document.getElementById("formTerm");
// const inputterm = document.getElementById("inputTerm");
// const checkterm = document.getElementById("checkTerm");
// const buttonterm = document.getElementById("buttonTerm");
// const numberterm = document.getElementById("numberTerm");
// const Ageterm = document.getElementById("AgeTerm");
// const radiomale = document.getElementById("radioMale");
// const radiofmale = document.getElementById("radioFMale");

// posisition.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (!checkterm.checked) {
//     alert("check Term");
//     return;
//   } else if (!inputterm.value) {
//     alert("check Name");
//     return;
//   }

//   console.log(`Name : ${inputterm.value}
// Gender : ${(radiomale, radiofmale)}
// Age : ${Ageterm.value}
// Moblie Number :${numberterm.value}
// Term Statue : ${checkterm.checked}
// `);
// });

// let linumber = document.querySelectorAll("#listofli li")

// console.log(linumber)
// linumber.forEach(li =>{
//   li.addEventListener(("click"),()=>{
//     console.log(li);
//   })
// })

// for(let itemm of linumber)
// itemm.addEventListener(('click'),() =>{
//   console.log(itemm);
// })

// let colord = document.querySelectorAll("#datael  tr");
// let changecolor;
// colord.forEach((li) => {

//   li.addEventListener("click", () => {

//     // if(changecolor != undefined){

//     //     changecolor.remove()
//     // }

//     // changecolor = chsssan;
//     li.setAttribute("style", "background-color: royalblue;");

//   });
// });

// let tableEl = document.querySelector("table")
// let re;
// tableEl.addEventListener('click',(event)=>{

// let targetEl = event.target
// let closestTr = targetEl.closest("tr")

// if(re != undefined)
// {
//     re.classList.remove("bgcorol")
// }
// re = closestTr;
// closestTr.classList.add('bgcorol')
// })

// let div = document.querySelector("#donate input");

// let btn = document.querySelector("#donate button ")

// console.log(btn);

// btn.addEventListener('click',()=>{
//     alert(`Thank You For Donate ${div.value}`)
//     console.log(div.value);
// })

//MOUSE EVEVENTS

// document.addEventListener('mousedown',(event)=>{

//     console.log('mousedown :',event);
// })

// document.addEventListener("mouseup",(event)=>{
//     console.log("mouseup",event);
// })

// document.addEventListener('mouseenter',(event)=>{

//     console.log("mouseenter",event);

// })

// document.addEventListener("mouseleave",(event)=>{
//     console.log("mouseleave",event);
// })

// document.addEventListener("mousemove",(event)=>{
//     console.log("mousemove",event);
// })

// document.addEventListener("mouseout",(event)=>{
//     console.log("mouseout",event);
// })

// document.addEventListener("mouseover",(event)=>{
//     console.log("mouseover",event);
// })

// document.addEventListener("contextmenu",(event)=>{
//     console.log("contextmenu",event.preventDefault());
// })

// document.addEventListener("copy",(event)=>{
//     console.log("copy",event.preventDefault());
// })

// document.addEventListener("dblclick",(event)=>{
//     console.log("dblclick");
// })
// document.addEventListener("click",()=>{
//     console.log("click");
// })

// document.addEventListener("mouseup", (event) => {
//   console.log(event.which);
//   switch (event.which) {
//     case 1:
//       console.log(event.which,"left");
//       break;
//     case 2:
//       console.log(event.which,"midde");
//       break;
//     case 3:
//       console.log(event.which ,"Right");
//       break;

//     default:
//      alert("invalied")
//       break;
//   }
// });

// document.addEventListener("keydown",(event)=>{
//     console.log("keydown",event);
// })

// document.addEventListener("keyup",()=>{
//     console.log("keyup",event);
// })