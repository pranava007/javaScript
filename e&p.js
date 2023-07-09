
/*
let password =1234;

function PasswCheck (passw)
{
  if(passw.includes('1234'))
  {
     console.log(true);
  }
  else
  {
    console.log(false);
  }
} 
PasswCheck (password);
*/

let todol = [];

todol.push('go to metidation');
todol.push('feel the god');
todol.push('go to learn');
todol.push('buy the laptop');
todol.push('buy the bike');
todol.push('buy the car');
todol.push('make tha more money');
todol.push('go to help others');

//one of the mothed
//console.log(todol.indexOf('feel the god'));

//one of the mothed
// let mytodowr = todol.findIndex(function(toto){

//     return toto == 'feel the god';


// }
// )

// console.log(mytodowr);


let massdo = function(toto,searcheitem)
{
    let doo = toto.findIndex(

        function(data)
        {
            return data.toLowercase == searcheitem.toLowercase;
        }

    )
    return doo;
}

console.log(massdo(todol, 'go to metidation'));

