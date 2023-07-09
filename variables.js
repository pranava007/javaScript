//print 
console.log("hello");

//variabls

let box ="pranavamuthu";
console.log(box);

let number = 1;
console.log(number);

//concadination

let FirstName = "pranava";
let secountName = "muthu";
console.log(FirstName+secountName);


let string = "pranava Muthu" + "Hi!3";
console.log(string);

//number's

let number1 =2;
let mass ;
console.log(number1 + 6);

let score =10;

console.log(score + 10);

let score1 =10;
const bouns = 30;
console.log(score + bouns );

let score6 =10;
score6 = 30;
console.log(score6 );


let finnalscore = score + score1;

console.log(finnalscore);

//boolen
//true or fales

let login = false;
let login1 = true;

// undefind in js
//ulla oru value kuda ella atha show pannu undefined

let score5;
console.log(score5);

//if and else statment

let paymet = false;

if(paymet)
{
   console.log("watch vedio");
}

else 
{
    console.log("Pls....Make payment")
}

//else if

let whoishere = "admin";

if(whoishere == "student")
{
   console.log( whoishere +  "__hi");
}

else if(whoishere == "teacher")
{
   console.log( whoishere +  "__hi");
}

else if(whoishere == "admin")
{
   console.log( whoishere +  "__hi");
}

else
{
    console.log("__No__");
}


let done = true;

if(10 != 2)
{
    console.log("yes");
}

else
{
    console.log("__No__");
}



// Logical Operater
// && = compare both sides should be ture
let login11 = false;
let payment = false;

if (login11 && payment)
{
    console.log("watch vedio");
}

else
{
    console.log("log in page");
}

//  || = one said true

let glogin = true;
let fblogin = false;

if (glogin || fblogin)
{
   console.log("Done");
}

// scope in js

//variable declared

let name_name ="gr"; 
const n_name = "ha"; // not change
var nn_name = "ma" // js old use key words 

if (true)
{
let FName = "mass"; 
name_name = "changd";
console.log(name_name);
console.log(FName);
}

//console.log(FName); // not scope

/*
let deffernd var
if statment ulla than accss but var out  said run akummm 
not svope
2du if els la ullla write pannura let
same variable name use pannalam
*/

//Array or list in js
//one variable la more then data storge pannum
let heros ='Iron man' //single value
let heros_2 = ['Iron man','Thor', 'spider man',234];
console.log(heros_2);
//index value use

console.log(heros_2.length);
console.log('we have' + heros_2.length + 'superheros' );
console.log(`we have ${heros_2.length} superheros`);
console.log(`we have ${3 + 3} superheros`);

//function

function sayhello()
{
    console.log("hi pranavamuthu");
}

sayhello();

//String add
function sayhello__(giri)//parameter pass
{
    console.log(`Hi ${giri}`);
}

sayhello__('pranavamuthu change');

//Addtion
function say_hello(a,b)
{
    console.log(a + b);
}

say_hello(20,30);

//concodination
function fullname(firstname,secntname)
{
  console.log(`!!!Hi${firstname} ${secntname}`)
}

fullname("pranava","muthu");


let Say_Boy =function(mass_s)
{
    console.log(`Hi ${mass_s}`);
}

Say_Boy("shiven");

//one of the way
function addnumber(num1,num2)
{
    let add = num1 + num2;
    return add; 
}
console.log(`your result ${addnumber(10,20)} `);


//For Each

let heros_3= ['Iron man','Thor', 'spider man',234];

heros_3.forEach
(
    
  function (heros_3,position) //call backm function function cku name ella ma run pannalam
  {
    // console.log(value);
     console.log(`${position + 1} . ${heros_3}`);
  }

);


//total user ra arrya la podu forche avchee table form pannalam
let days =['mon','thu','wed']

days.forEach(
//use call back function
function(days,position)
{
    console.log(`${position} . ${days}`);
}


);


// For loop
//for(declaration,condition,incress,decrese)
for (add=1; add <= 10; add=add+1)
{
   console.log(add);
}

let days_q =['mon','thu','wed']

for(add_1=0; add_1 < days_q.length; add_1=add_1 + 1)
{
    console.log(days_q[add_1]);
}

//simelar

for(i=0; i < days_q.length; i++)
{
    console.log(days_q[i]);
}

//Todo application

let mytodo=['learn code','trading profit take','buy Mac Laptop','buy iphone pro max','buy bike apove 3L','shivan']
mytodo.push('metidation shivan god'); //add apannalam last join
mytodo.unshift('shivan all time faverad')//add apannalam finrst

mytodo.forEach
(
    function(mytodo,position)
    {
      console.log(`${position+1}.${mytodo}`)
    }
)


for ( i = 1; i < mytodo.length; i++)
{
    console.log(`${mytodo[i]}`);
}


/*floor
 3.1234364 = 3
 3.9999999 = 3

 ceil
 3.1234364 = 4
 3.9999999 = 4

*/

let number4 = 22/3;
console.log(Math.floor(number4));
console.log(Math.ceil(number4));

console.log(Math.random() * 10 +1);

let upper = 6;
let lower = 1;

console.log(Math.floor(Math.random() * (upper - lower + 1) ));