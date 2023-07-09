let fixplace = document.getElementById("item") 

let inputFood = document.getElementById("input_food")

let btn = document.getElementById("id_btn")

// INPUT CLOSE

//creat elament 





let handleinput = () => {


    let creatLi= document.createElement("li");
    
    let creatdiv = document.createElement("div");
    
    let creatbtndiv = document.createElement('div');
    
    let creatbtn = document.createElement("button");
    
    // console.log(creatbtndiv);
    
    // ulla add  pannanum li
    
    creatLi.append(creatdiv,creatbtndiv,creatbtn)
    
    //creatbtndiv attripute add
    
    creatbtndiv.parentElement.setAttribute("onclick","removeItem(event)");
    
    //li class id add
    creatLi.className="foot-item";
    creatLi.id ="mass";
    
    
    // add div input elament
    
    creatdiv.textContent = inputFood.value;
    
    //btndiv
    
    creatbtn.id ="remove";
    creatbtn.className="btnclos";
    creatbtn.textContent = "X";
    
    creatbtndiv.append(creatbtn);
    creatLi.append(creatdiv);
    creatLi.append(creatbtndiv);
    
    
    fixplace.append(creatLi);
    
    
    // fixplace.innerHTML += creatLi.innerHTML
    
    
    }



btn.addEventListener('click', handleinput )

inputFood.addEventListener("keyup",(event)=>{
    if(event.key ==="Enter")
    {
        handleinput()
    }
    else if (event.key === "KeyZ" )
    {
       inputFood.remove()

    }
})

// document.addEventListener("keyup",(event)=>{
//     console.log(event);
// })

function removeItem(event)
{
    let exisitinglist = event.target.parentNode.parentNode;
    console.log(exisitinglist);

    exisitinglist.remove();
}







// const inputclass = document.querySelector(".sec-input input");

// const btnclass = document.querySelector(".sec-input button");

// console.log(inputclass,btnclass);

// btnclass.setAttribute("style","  width: 50px;height: 30px;color: aliceblue; background-color: royalblue; border: none; border-radius: 10px; outline: none; outline: none; ")
// btnclass.setAttribute("isalive","true")
// console.log(inputclass,btnclass)