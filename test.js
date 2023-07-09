let n_name = {
    name3:'pranavamuthu',
    age3:22
   }

   let clone_1st = n_name;
   console.log(clone_1st);

   
   for(let oder in n_name)
        {
            
            console.log(oder,n_name[oder]);
        }

  for(let key of Object.keys(n_name))
  {
    console.log(key,n_name[key]);
  }

  let Object_clone ={}

  for(let clone in n_name)
  {
   Object_clone[clone] = n_name[clone]
  }
  console.log(Object_clone);

 
  let secund = Object.assign(n_name);
  console.log(secund);

  let esey ={
    ...n_name
  }
console.log(esey);
  
       