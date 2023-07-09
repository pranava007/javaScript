//add element 

//.push() 
//.unshift()
//.splice()

let array = ["raja", "ram", "ramu", "hari", "giri"]
//Total value show
console.log(array);
//Particular value show
console.log(array[0]);
//Replace value
array[0] = "shiven"
console.log(array);

//.push() end storage mathods
array.push("pranavamuthu")
console.log(array);

//.unshift start
array.unshift('shiven God'.toUpperCase())
console.log(array);

//.splice() //replace
array.splice(2, 3, "ttt", "33333", "777")
console.log(array);


//find the primitive value
let find_elament = [22, 33, 44, 55, 66, 22]

let show = find_elament.indexOf(44)
console.log(show);
let show_ = find_elament.lastIndexOf(22)
console.log(show_);

//erucka ellaya
console.log(find_elament.includes(44));

//find the reference value

let reference_type = [
    { id: 1, item: 'mac_book_pro', case_on_dalivary: true },
    { id: 2, item: 'mac book air', case_on_dalivary: true },
    { id: 3, item: 'mac book ', case_on_dalivary: true },
    { id: 4, item: 'mac pro max', case_on_dalivary: true },
]
console.log(reference_type)
//replace elament
let new_add = reference_type[0] = { id: 4, item: 'mac pro max', case_on_dalivary: true }
console.log(new_add);
console.log(reference_type)

reference_type.push({ id: 4, item: 'mac pro max', case_on_dalivary: true },)
//not work
// let yes = reference_type.includes({ id: 4, item: 'mac pro max', case_on_dalivary: true },)
// console.log(yes);

let var_name = reference_type.find((producte) => {
    return producte.item = 'mac_book_pro'
})
console.log(var_name);

//removeing
let remove = [22, 33, 44, 55, 66, 77]

remove.pop() //last value remove
console.log("pop :", remove);
remove.shift()//front value remove
console.log(remove);

remove.splice(1, 3)//middle value remove
console.log("remove :" + remove);
//unshift and shift la  value enter panna add akum ,index madom enter panna remove akum


let emty = [22, 33, 44, 67, 89, 10]
console.log(emty); //primitive
// emty =[]
// console.log(emty);
//console.log(emty.length = 0);

while (emty.length) {
    emty.pop()
}
console.log('mmm', emty);

//compaine
let pranava_frinds = ["shiven", "mukesh", "God's"]
let shiven_friend = ["pranavamuthu"]

let final = pranava_frinds.concat(shiven_friend)
console.log(final);
//slice 1 panna 2,3,4 lam sathu varumm pathiya
let mass = pranava_frinds.slice(1)
console.log(mass);
//compin oda advance modal ...spread ...variyable_name
let spread = [...pranava_frinds, ...shiven_friend, ...reference_type]
console.log(spread);

//iteading
let itrating = ["shiven", "parvathi davi", "murugar", "vinayakar"]

for (let order in itrating) {
    console.log(itrating[order]);
}

for (let order of itrating) {
    console.log(order);
}

itrating.forEach(function (order) {
    console.log(order);
})

let join_w = ["cool", "mass", "toto"]

console.log(join_w.join("_"));


//splite

let name_r = "Pranava Muthu"

let new_name = name_r.split(" ")
let first_name = new_name[0];
let last_name = new_name[1];
console.log(last_name);


//sorting

let number_order = [2, 4, 6, 9, 5]
number_order.sort()
console.log(number_order)
number_order.reverse()
console.log(number_order);

//reference type sorting

let rever = [
    { id: 4, name: "pranava" },
    { id: 6, name: "pranava" },
    { id: 7, name: "pranava" },
    { id: 1, name: "pranava" }
]

let name = rever.sort(function (a, b) {
    if (a.id < b.id) return -1;
    //if(a.id>b.id) return 1;
})
console.log(name);

//every , some
let allowed = [25, 35, 45, 18, 6, 3, 60, 8, 9,]

let ret = allowed.every(function (age) {
    return age >= 18
})
console.log(ret);

let obj_number = [
    { age: 24 },
    { age: 34 },
    { age: 54 },
]

let new_con = obj_number.every(function (add) {
    return add.age >= 18
})

console.log(new_con);

//filter
let filter = allowed.filter(function (fil_ter) {
    return fil_ter >= 18;
})

console.log(filter);

let fil_reference = [
    { id: 1, item: "mac book", price: 2000 },
    { id: 1, item: "mac book", price: 3000 },
    { id: 1, item: "mac book", price: 2000 },
    { id: 1, item: "mac book", price: 7000 },
    { id: 1, item: "mac book", price: 9000 },
    { id: 1, item: "mac book", price: 1000 },
]

let referncen = fil_reference.filter(function (new_filter) {
    return new_filter.price >= 3000;
})
console.log(referncen);

//find first value va get pannum
let referncen_ = fil_reference.find(function (new_filter) {
    return new_filter.price >= 3000;
})
console.log(referncen_);

//findindex first index value va get pannum
let referncen__ = fil_reference.findIndex(function (new_filter) {
    return new_filter.price >= 3000;
})
console.log(referncen__);


//mapping 2 value va compaine pannalam ,


let mapping = [1, 2, 3, 4, 5]

let result = mapping.map(function (value) {
    return value % 2;
})

let new_var = result;

console.log(new_var);


let object_mapping = [
    { di: 1, first_name: "pranava", last_name: 'muthu' },
    { di: 2, first_name: "shiven", last_name: 'pranavamuthu' },
    { di: 3, first_name: "shiven_friend", last_name: 'pranavamuthu' },
]

let new_re = object_mapping.map(function (value) {
    return [value.first_name, value.last_name].join(" ")
})

console.log(new_re)
//chaine
let items = [
    { id: 1, titel: "Android phone", cost: 7500 },
    { id: 2, titel: "Gaming computer", cost: 90500 },
    { id: 3, titel: "Headphone", cost: 2400 },
]

let final_chine = oder = items.sort(function (a, b) {
    if (a.cost < b.cost) return -1;
}).sort(function (a, b) {
    if (a.titel < b.titel) return -1;
}).filter(function (value) {
    return value.cost >= 2400
}).map(function (value) {
    return [value.titel + value.cost].join("_")
})

console.log(final_chine);

//reduce //

let donation = [200, 300, 400, 500, 46666, 455]

let total_amount = donation.reduce(function (previousvalue, currentvalue) {
    return previousvalue + currentvalue;
})

console.log("per_day salary :" + total_amount);

let shoping_cart = [
    { id: 1, items: "milk", cost: 40 },
    { id: 1, items: "food", cost: 200 },
    { id: 1, items: "bread", cost: 46 },
    { id: 1, items: "TV", cost: 90000 },
]

let total_amoun = shoping_cart.reduce(function (previousvalue, currentvalue) {
    console.log("previousvalue", previousvalue);
    return previousvalue + currentvalue.cost

}, 1)

console.log(total_amoun)

//normal code

let num_1 = 20;
let num_2 = 30;

let result_num = num_1 + num_2;

console.log(result_num);

//function

function get_fun(a, b) {
    let sum = a + b;
    console.log(sum);

}
get_fun(30, 30);


//daily expencess arument



function daily_expencess(lunch, icrem, petrol) {

    let total = 0;

    for (let key of arguments) {
        total += key
    }

    return total;

}

let test = daily_expencess(20, 300, 400, 300, 30, 500);
console.log(`Total Today Expencess toytal :${test}`)
//console.log(test) use return

//or

let name_o=[20,40,506]
let reduce = name_o.reduce(function(previousValue,currentValue)
{
     return  currentValue+previousValue;
})
console.log(reduce)

// ... rest oprator

function rest_operator(...arguments)
{
    return arguments.reduce((a,b) => a+b);
}
let total = rest_operator(284,586,7097,890);
console.log(total)

function Tax(cost)
{
  
    return cost * (18/100)
   
}

let sun_tax =Tax(10000);

console.log(sun_tax);


let stud ={
    firstname:"pranava",
    lastname:"muthu",
    get fullname ()
    {
         return `${stud.firstname} ${stud.lastname}`
    },
    set fullname (value)
    {
        if(typeof value != "string") throw "Enter the Name";

        if(value.length <= 3 ) throw "invalid Name";

       

        let val = value.split(" ");
        this.firstname=val[0];
        this.lastname=val[1] ?? "";

    }
}
try {
    stud.fullname = "Shiven God";
} catch (error) {
   alert(error);
}


console.log(stud.fullname);