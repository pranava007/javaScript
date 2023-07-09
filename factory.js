// function f_name(name,age)
// {
//   return{
//     name,
//     age,
//     mass:function()
//     {
//       console.log(`i am ${this.name},${this.age} age older`);
//     }

//   }
// }
// let persion = f_name('pranavamuthu',22);
// persion.mass()


// let persion_1 ={
               
//      name:"pranavamuthu",

// }
// persion_1.age2=22;
// delete persion_1.age2;
// let nn = persion_1.age2;
// console.log(nn);


// function Name__Bank (name_n,bank_balance)
// {
//    this.name_n;
//    this.bank_balance;
//    let per_sion =(`hi welcome ${name_n} your bank balanace ${bank_balance}`);
//   console.log(per_sion);
// }
// Name__Bank('pranavamuthu',"1,000,0000");


let num = {value:0};

function f_name2(num)
{
  num.value++;

}

f_name2(num);

console.log(num);

let persion = {
  name:'pranavamuthu',
  age:22,
  education:'MCA'
}
for(let key in persion)
 console.log(key, persion[key]);


 for(let key of Object.keys(persion))
 console.log(key, persion[key]);

 if ('name' in persion)
 {
  console.log('yes');
 }

 //clone

 let n_name = {
  name3:'pranavamuthu',
  age3:22
 }

 let n_name1 = n_name;
 console.log(n_name1);

 let another= {}

for(let key in n_name)
 {
     another[key] = n_name[key]

 }
 console.log(another);


 let copy_objeact = Object.assign({coures:'MCA'},n_name);
 console.log(copy_objeact);


 let sep_name = {
  ...n_name
 
}

console.log(sep_name);
