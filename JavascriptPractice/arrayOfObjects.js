let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
   };

   let arrKeys = Object.keys(car);
   console.log(arrKeys);
   //for (const keys of )

   for(let keys of arrKeys)
    console.log(keys);

    for(let val of Object.values(car))
    console.log(val);

    let arrentries = Object.entries(car);
    console.log(arrentries);

    for( [key,values] of Object.entries(car)){
        console.log(key , ":", values);
    }

