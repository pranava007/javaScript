//documentdation  mdn js == wbesite name mdn 


let email='Pranavamuthu000@gmail.com';
//let password =239409;

//console.log(email.toLocaleLowerCase()); //uper cass lower cass akum
//console.log(email.includes('giri'));//erucka ella ya check pannum


function EmailCheck (user)
{
  if(user.includes('@') && (user.leanth > 6))
  {
     console.log(true);
  }
  else
  {
    console.log(false);
  }
} 

  EmailCheck(email); 

