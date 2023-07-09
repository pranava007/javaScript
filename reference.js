let shop = [
    { id: 1, item: "macbook", price: `$1200` },
    { id: 1, item: "macbook air", price: `$1000` },
    { id: 1, item: "mac pro max", price: `$1200` }
]

let producte = shop.find((order) => order.item === "macbook"


)

console.log(producte);

function fun_name() {

}

let name = function () {

}

let name0 = () => {

}

let array = [14, 34, 43, 63]
//last remove
console.log(array.pop());
//first remove
console.log(array.shift())
//meddial remove
array.splice(2, 1)

console.log(array);

let number = [22, 33, 44, 55, 66]
console.log(number);
//1 emty
// number=[]
// console.log(number);

//2nd emty
// let another=[]
// another_number=number;
//console.log(another)

//3th emty
// let num=number.length = 0
// console.log(num)

//4th
// number.splice(2,number.length)
// console.log(number);

//5th
while (number.length) number.pop()
console.log(number)

//compaine
let num = [11, 12, 13, 14, 15]
let sum = [16, 17, 18, 19, 20]

let compaine = num.concat(sum);
console.log(compaine);
let extrac = compaine.slice(0, 3)
console.log(extrac);

//spread

let compaine_ = [...num, 45, 456, ...sum, { item: 'mooo' }]
console.log(compaine_);

//order ra print
let dailyRoutine = ["wake up", "Eat", "sleep"]

for (let routing of dailyRoutine) {
    console.log(routing);
}
for (let routing in dailyRoutine) {
    console.log(routing, dailyRoutine[routing]);
}
//forEach
dailyRoutine.forEach((routing, indexe) => (indexe, routing))
//join
let join = dailyRoutine.join("'s ")
console.log(join);

//splite

let name_r = "Pranava Muthu"

let new_name = name_r.split(" ")
console.log(new_name);
let first_n = new_name[0]
let last_name = new_name[1]
console.log(first_n, last_name);

//primitive short
let student = [2, 4, 7, 3]
student.sort()
console.log(student);
student.reverse()
console.log(student);

//reference
let stud = [
    { id: 4, name: "muthu" },
    { id: 3, name: "raja" },
    { id: 6, name: "aam" },
    { id: 9, name: "raj" },
   
]

let names = stud.sort(function(a,b)
{
    if(a.name<b.name) return -1;
    if(a.name > b.name)  return 1;
}
)
console.log(names);

// if(a.id<b.id) return -1;
// if(a.id > b.id)  return 1;