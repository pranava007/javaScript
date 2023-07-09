// let formel = document.querySelector("form");

// console.log(formel);

// let fullname = formel.querySelector('#inputtextid');

// console.log(fullname);

// let formel = document.

// let formEl = document.forms.fullName;

// console.log(formEl);

// let firstinput = formEl.elements.inputtextname;
// let radioinput = formEl.elements.type;
// let  emailinput =formEl.elements.emailtext;
// let textareinput = formEl.elements.dicel;
// let btninput = formEl.elements.sumbit;

// console.log(firstinput,radioinput,emailinput,textareinput,btninput);

// or Es6 mathod

// start ES6

// let formEl = document.forms.fullName;

// let { inputtextname, type, emailtext, dicel, tearms, sumbit } = formEl.elements;

// console.log("text getelament:", inputtextname.placeholder);

// let formEl = document.forms.fullName;
// // let btnel = document.querySelector("form button")
// // console.log(btnel);

// formEl.addEventListener("sumbit", (event) => {
//   event.preventDefault();
//   // let { inputtextname, type, emailtext, dicel, tearms,  } = formEl.elements;
//   // console.log(inputtextname.value,type.value, emailtext.value, dicel.value, tearms.checked, );
//   // console.log("sumbited");

//   console.log([...new FormData(formEl)]);
// });

let formEl = document.forms.fullName;

let handlesumbit = (event) => {
  event.preventDefault();

  let formData = new FormData(formEl);

  console.log(formData);
};

formEl.addEventListener("sumbit", handlesumbit);
