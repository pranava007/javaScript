//arry 
let heros29 = ['iron man','thor','flash','sprider man'];

//object
let myobjeact = {

title : 'html,css,and js',
author: 'pranavamuthu',
coures: 'here comes coures description',
price:'10,000rs',
language:'tamil,english',

    printprice:function()
     {
        console.log("print price 100,000");

     },
//onether one methode

    log:function(datatitel)
     {
        console.log(datatitel)
     },
     changeprice:function(newprice)
     {
      this.price=newprice;
     }



}


 //data changed
myobjeact.changeprice('5000rs');
console.log(myobjeact.price);

myobjeact.title = 'trade';
console.log(myobjeact.language);
console.log(`my coures ${myobjeact.price} !!! price ${myobjeact.title}`);
myobjeact.printprice();
myobjeact.log("Good and God wave");
