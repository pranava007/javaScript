//encapsulation
let persion={
    name:"pranavamuthu",
    age:22,
    coures:"MCA",
    mark:[20,34,56,78,90],
    location:{
        state:"TamilNadu",
        city:"kallal"
    },
    genter:function(m)
    {
        console.log(`${m}`);
    }
}

persion.genter('mala');
console.log(persion.age);
console.log(persion.location.state);
console.log(persion.name);
console.log(persion.mark[3]);
//factory

function fun_name(name,age,coures,mark,location)
{
 return {
    name,
    age,
    coures,
    mark,
    location,
    genter:function(name)
    {
        console.log(`new try this ${name}`);
    }
}
    
}

let n2 = fun_name("pranavamuthu",22,"MCA",[50,30,40,40,],
{
    state:"TamilNadu",
    city:"kallal"
},

);
console.log(n2.genter("male"));
console.log(n2.location.state);
console.log(n2.mark[3]);
console.log(n2.age);
console.log(n2.name);
console.log(n2.coures);


//constructor

function MyName(name,age)
{
    this.name = name;
    this.age = age;
    this.fun_mass =function ()
    {
          console.log(`hi i am ${this.name} ${this.age} year's old`);
    }
}
let pranavamuthu = new MyName("pranavamuthu",22);
console.log(pranavamuthu.name);
console.log(pranavamuthu.age);

let yamuna = new MyName("yamuna",14);
console.log(yamuna.name);
console.log(yamuna.age);






let Dynamic_object ={
    name :'pranava',
    age :23,
}
//alter
Dynamic_object.age=24;
Dynamic_object.name ='pranavamuthu'
console.log(Dynamic_object.name);
console.log(Dynamic_object.age);
//add new elament
Dynamic_object . coures ='MCA2.0'
console.log(Dynamic_object.coures);
//deleted or remove
delete Dynamic_object.coures;
console.log(Dynamic_object.coures);

let number = 23;
let name ="pranavamuthu";
console.log(typeof number);
console.log(typeof name);


let number_1 = new Number(23);
let name_1 = new String("pranavamuthu");
console.log(typeof number_1);
console.log(typeof name_1);

//primiive
let x =10;
let y = x;
x = 20;
//reference
let a ={
    value:10,
}

let b= a;

a.value=20;

//ex code prmitive not working
let cart =0;
function addqcart(cart)
{
    cart =cart;
    cart ++;
}

addqcart(cart);
addqcart(cart);
addqcart(cart);
console.log(cart);

//ex code reference working
let cart_ ={

    value:0,
}

function update_cart(new_cart)
{
  new_cart.value++;   
}

update_cart(cart_);
update_cart(cart_);
update_cart(cart_);
console.log(cart_);


let array =["ram","raja","hari","giri"]

for(let key in array)
{
    console.log(array[key]);
}

let raja = {
    id:"P22CA2041",
    name:"raja",
    coures:"MCA"
}

for(let new_persion of Object.keys(raja))
{
    console.log(new_persion,raja[new_persion]);
}

for(let sc_und of Object.entries(raja))
{
    console.log(sc_und);
}

if('id' in raja)
{
    console.log("YES");
}
else
{
  console.log("NO");
}

let user ={
    name:"ram",
    age:22,
    coures:"MCA"
}

let copy_user = user;

console.log(copy_user);


let variable_name = Object.assign(user);
console.log(variable_name);

let another = {}

for(key in user)
{
   another[key]=user[key]
}

console.log(another);

let var_name ={

    ...user
}

console.log(var_name);

//Objeact mathe

let number_ =Math.abs(-10);

console.log(number_);

console.log(Math.floor(2.99));
console.log(Math.ceil(2.1));
console.log(Math.random());

function getRandom() {
    return Math.random();
  }
let fun = getRandom();

console.log( 'ybhb:',fun);

let mathee = Math.random()*(100 - 1) +1;
let mass = Math.round(mathee);
console.log(mass);

let mark_max1_ = Math.max(22,33,44,55,66);
console.log(mark_max1_);

let mark_max_1 = Math.min(22,33,44,55,66);
console.log(mark_max_1);

let name_amuna = "pranavamuhtu";
let n33= name_amuna.length
console.log(name_amuna);
console.log(n33);
let mmm = name_amuna.charAt(0)
console.log(mmm);
let fintout=name_amuna.includes('p');
console.log(fintout);



//literals
let massage="hi welcom do  \
pranavamuthu ihifruyhfw\
reiugfroipuh${} ewdiuhgeodf \
uywdgbviuerdg uywedqgiure \
sdulygire iedwudhg9eqoh uedwygipfew "

console.log(massage);
let massage_literals =`hi welcom do
pranavamuthu 
ihifruyhfw
reiugfroipuh 12#$%
ewdiuhgeodf ${massage}
uywdgbviuerdg uywedqgiure ""~""
sdulygire iedwudhg9eqoh uedwygipfew `

console.log(massage_literals);

let cur_date = new Date().getHours();
console.log(cur_date);

let name_array=["raja","ramu","giri","hari"]
console.log(name_array);
//replace
name_array[0] ="shiven";
//end add new values
name_array.push("kumar");
name_array.push("shiven");
//first add new elament 
name_array.unshift("shiven god ");
// index value find tha location place
name_array.splice(2,1,"sithar");
console.log(name_array);


// index faind out valuie first
console.log(name_array.indexOf("sithar"));

// index faind out valuie last
console.log('jjj:',name_array.lastIndexOf ("shiven"));

// value va vache erucka ella ya 
console.log(name_array.includes("shiven"));

let array_pranava=[14,34,43,63]
//last remove
console.log(array_pranava.pop());
//first remove
console.log(array_pranava.shift())
//meddial remove
array_pranava.splice(2,1)

console.log(array_pranava);