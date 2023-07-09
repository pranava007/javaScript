let a =10;

a-=3
console.log(a);

let age = 18;

let type = age >= 8 ? "free ticket":"paid ticket"
console.log(type);


let high_income = 100;
let ciblie_score = 100;

if (high_income <=10 && ciblie_score <=10 )
{
    console.log('loan eligeble');
}
else{
    console.log('Not eligeble');
}

const email = 'pranavamuthu000@gmail.com';
if("pranavamuthu000@gmail.com" && email)
{
    console.log("Home page");
}

const email_1 ="pranavamuthu000@gmail.com";
const passwords = "12345";
if (email_1 === "pranavamuthu000@gmail.com" && passwords === "12345")
{
    console.log('Home_page');
}
else{

    console.log("incorret passwords");
}

if(email && "pranavamuthu000@gmail.com")
{ 
 if(true)
 {
   console.log('user_profile');
 }
}

let hours = new Date().getHours()
console.log(hours);

if(hours >= 0 && hours <= 12 )
{
  console.log('goodmorning');
}
else if(hours >= 12 && hours <= 20 )
{
   console.log('goodafternoon');
}
else{
   console.log('goodeveining');
}

let mark = 10;

switch (mark) {
    case 10:
        console.log("faile");
        break;
    case 30:
        console.log("just pass");
        break;
    case 60:
        console.log("good");
        break;
    case 90:
        console.log("grate");
        break;

    default:
        console.log("unknow");
        break;
    }
// let name =[" pranavamuthu","raja","ramu","hari","giri"]
// for(i=0;i < name.length;i++)
// {
//     console.log(i,name[i]);
// }
// let i=0;
// while(i<=10)
// {
//   console.log(i);
//   i++;
// }

// for(i=0;i<=10;i++)
// {
//     if(i%2 )
//     {
//        console.log(i)
//     }
// }

// let i = 0;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }

// do
// {
//     console.log(i);
// i++;
// }

// while(i<10);

let array =["ram","raja","hari","giri"]

for(let key in array)
{
    console.log(array[key]);
}

let array_=    {
name:"pranavamuthu",
age:22,
coures:"MCA"
}

for(let key_1 in array_)
{
    console.log(key_1,array.key_1);
}