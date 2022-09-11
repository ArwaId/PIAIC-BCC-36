function quarter_of_the_year(date) 
  {
    //console.log(date.getMonth());
    var month = date.getMonth() + 1 ;
    return (Math.ceil(month / 3) );
  }


console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 5, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18)));