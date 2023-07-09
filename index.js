// console.log("hight and width :", innerHeight, innerWidth);
// window.open('https://googel.com')
// window.close()
// window.moveTo(10000,100)
// window.alert("Hi pranavamuthu")
// window.prompt("Hi pranavamuthu Any Qurey's..." )
// window.print();

// let namea="lusuuuu"
// console.log(console);
// console.error(namea)
// console.warn("This is not crt place")
// console.log(window.screen)

// console.log(location);

// window.setInterval(()=>{
//     document.title = "change name";
// } , 5000)

// window.setInterval(()=>{
//     window.open('https://googel.com')
// } , 5000)

// if(window.location.protocol === "http:")
// {
//  console.warn("unsecured protocol http:")
// }
// else{
//     console.log("safe protocal https:")
// }
// history.go(1)
// history.back()
// console.log(navigator)
// document.body.children[1].children[1].innerHTML = `pass`
// console.log(document.body);

// document.body.innerHTML =`<h1>pranavamuthu</h1>`
// document.body.innerHTML =`<h6>pranavamuthu</h6>`
// document.body.innerHTML='hi hello'
// document.writeln (" muthu")

// document.title ="mass"

// document.body.children[0].innerHTML="hi"
// document.body.children[1].innerHTML=`<h3>hi hello welcom</h3>`
// document.body.children[2].innerHTML=`<h3>hi hello welcom</h3>`
// document.body.children[3].innerHTML=`<h3>hi hello welcom</h3>`
// document.body.children[0].innerHTML =`🍕Food Planner-in Tamil`

// console.log(window.find("🍕Food"))

// let persion={
//     name_:'raja',
//     place:'pudukkotai',
//     getuser(){
//         return `Hi i am ${this.name_} i am from ${this.place}`
//     }
// }
// // persion.name="hari"
// // persion.place="madurai"

// // console.log(persion.getuser());

// // document.write(persion.getuser())
// // document.body.children[0].innerHTML = persion.getuser()

// let name_one = prompt("Enter Your Name")
// let place_one = prompt("Enter Your Place")

// persion. name_=name_one;

// persion. place =place_one;

// console.log(persion.getuser())
// document.body.children[0].innerHTML = persion.getuser()
// document.write(persion.getuser())

// document.addEventListener('DOMContentLoaded',() =>{

//     alert("DOMContentLoaded")
// })

// let testclass = document.getElementsByClassName("items")

// console.log( testclass );

// let t = [].map.call(testclass,(food)=>food.textContent )

// console.log(t);

// let teg_collection = document.getElementsByTagName("li")

// console.log(teg_collection.length);

// let checke = document.getElementsByName("foo")
// console.log(checke );

// let div_e = document.querySelector("li ")
// // let div_e = document.querySelector("li:last-child")

// console.log(div_e);

// let main = document.getElementById("main");

// let div = document.createElement("div");

// div.className = "aler";

// let nodetext = document.createTextNode("✅Successful! Food is updated! "
// );

// // div.textContent= "✅Successful! Food is updated! "

// div.append(nodetext);

// main.prepend(div)

// let fun = function (message) {
//   let position = document.getElementById("main");

//   let creat_elament = document.createElement("div");

//   creat_elament.className = "aler";

//   let textNod = document.createTextNode(message);

//   creat_elament.append(textNod);

//   // position.prepend(creat_elament);
// };

// let input_Food = document.getElementById("input_food")
// console.log(input_Food);

// let input_btn = document.getElementById("id_btn");

// let single_page = document.getElementById("item");

// input_btn.addEventListener("click", () => {
//   single_page.innerHTML += `<li class=" foot-item ">  ${input_Food.value} </li>`;

//   fun("✅Successful! Food is updated!");
// });

// let change_text = document.getElementById("x_remove")
// change_text.innerText = "hello! pranava <strong>✅Successful!</strong> Food is updated!"
// change_text.innerHTML = "hello! pranava <strong>✅Successful!</strong> Food is updated!"
// change_text.textContent = "hello! pranava <strong>✅Successful!</strong> Food is updated!"

//innerHtml
// let position = document.getElementById("main");

// let change = `

// <div class="aler">${"hello welcomm to amarica"}</div>

// `
// position.innerHTML += change
// console.log( change)

// console.time("test");
// for(let i=0;i<=100;i++)
// {

//   let main = document.getElementById("item")

//   let li = document.createElement("li")

//   li.className ="foot-item"

//   li.textContent =`Food_item : ${i}`

//   main.append(li)

// }
// console.timeEnd("test");
// console.time("test_qend");

// let fragment = document.createDocumentFragment();

// let main = document.getElementById("item");

// for (let i = 0; i <= 100; i++) {

//   let li = document.createElement("li");

//   li.className = "foot-item";

//   li.textContent = `Food_item : ${i}`;

//   fragment.append(li);
// }
// main.append(fragment);
// console.timeEnd("test_qend");

// let fragment = document.createDocumentFragment();

// let main = document.getElementById("item");

// let food = ["sampar", "thairu", "cured", "rasam", "raice"];

// for (let i = 0; i < food.length; i++) {
//   let oder = food[i];

//   let li = document.createElement("li");

//   li.className = " foot-item";

//   li.textContent = `${oder}`;

//   fragment.append(li);
// }

// main.append(fragment);

// for (let i = 0; i < 1000; i++)
//  {
//   let mag =' Mukesh Sister ❤ Anita '
//   console.log(i + mag )
//  }

// let fracment = document.createDocumentFragment();

// let insert = document.getElementById("item");

// let li = document.createElement("li");

// li.className = "foot-item";

// li.textContent = `magie`;

// insert.insertAdjacentHTML("beforeend"," <h1>food</h1>")
// insert.insertAdjacentText("beforeend"," food")
// insert.insertAdjacentElement("beforebegin",li)

// fracment.append(li);

// insert.before(li);
// insert.after(li);

//new method
// insert.before(li)
// insert.after(li)

//old method

// insert.parentNode.insertBefore(li,insert);
// insert.parentNode.insertBefore(li,insert.nextSibling);

// let position = document.querySelector("#item")
// console.log(position)

// let li = document.createElement("li")

// li.className = "foot-item"

// li.textContent = "biriyane"

// let moru = document.createElement("li")

// moru.className = "foot-item"

// moru.textContent = "moru"

// let pogal = document.createElement("li")

// pogal.className = "foot-item"

// pogal.textContent = "pogal"

// position.replaceChildren(li,moru,pogal)

// position.insertAdjacentHTML("afterbegin","<h3 class =foot-item >sambar</h3>")
// position.insertAdjacentText("afterbegin","sambar")
// position.insertAdjacentElement("afterbegin",li)

// const position = document.querySelector("#item")
// const clone = position.cloneNode()
// const cloneTure = position.cloneNode(true)

// console.log(clone);
// console.log(cloneTure);

// const posision = document.getElementById("item")

// const duplicate = document.getElementById("try")

// const btn = document.getElementById("btnid")

// btn.addEventListener('click', ()=>{

// duplicate.innerHTML=""

// const cloneTrue = posision.cloneNode(true)

// duplicate.append(cloneTrue)

// })

// let main = document.getElementById("item");

// let li = document.createElement("li");

// let div = document.createElement("div");

// let divbtn = document.createElement("div");

// let btn = document.createElement("button");

// div.textContent = "lamen";

// btn.className = "btnclos";
// btn.id = "remove";
// btn.textContent = "X";

// li.className = "foot-item";
// li.id="mass";

// li.append(div);
// divbtn.append(btn);
// li.append(divbtn);

// main.append(li);

// let removeposistion = document.getElementById("item")

// let removeli = document.getElementById("mass")

// let removebtn =document.getElementById("remove")

// removebtn.addEventListener("click",()=>{
//   removeli.remove()
// })

// let inputfood = document.getElementById("input_food");

// let buttonclike = document.getElementById("id_btn");

// let respon = document.getElementById("item");
// let reli = document.createElement("li");
// let rediv = document.createElement("div");
// let rebtndiv = document.createElement("div");
// let rebtn = document.createElement("button");





// buttonclike.addEventListener("click", () => {




// reli.className = "foot-item";
// reli.id = "mass";
// rebtn.id = "remove";
// rebtn.className = "btnclos";

// rebtn.textContent = "X";

// rediv.textContent = inputfood.value;
// reli.append(rebtndiv,rediv,rebtn)

// rebtndiv.parentElement.setAttribute("onclick","removeItem(event)")


// reli.append(rediv);
// reli.append(rebtndiv);
// rebtndiv.append(rebtn);
//   reli.append(rebtndiv);
 

//  let test = respon.innerHTML += reli.innerHTML;
//   // respon.innerHTML += `<li class=" foot-item" >${inputfood.value} </li>`;
// });

// function removeItem(event) {
//   let exisitinglist = event.target.parentNode.parentNode;

//   console.log(exisitinglist);

//   exisitinglist.remove();
 
// }





