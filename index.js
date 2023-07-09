
//encapsulation
let person = {
    name1:"pranavamuthu",
    age1:22,
    intres:['trading','coding','teaching'],
    isAlive:true,
    adders:{
        city:'kallal',
        state:'Tamilnadu'
    },
    mass :function ()
    {
    let mag = `i am ${this.name1},${this.age1} age old`;
    console.log(mag);
    }
    
}

person.mass();



// let name ='pranavmuthu';
// let age = 22;
// intrest=['teaching']

// let mass = () =>
// {
// console.log(`i am ${name},${age} age old`);
// }
// mass();// 