let converrupe = (doller) =>
{
   if(typeof doller == 'number')
   {
      console.log(doller * 81);
   }
   else
   {
     throw Error('Amount need to be in number')
   }
}


try 
{
    console.log(converrupe(1));

} 
catch (error)
{
    console.log(error);
}