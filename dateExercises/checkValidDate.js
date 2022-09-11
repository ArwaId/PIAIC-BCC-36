function validDate(d){
  if( Object.prototype.toString.call(d) === "[object Date]")
  
  return( true);
    else
    return false;
}
 
console.log(validDate("October 13, 2014 11:13:00"));
console.log(validDate(new Date(99,6,5,11,33,30,0)));
console.log(validDate(new Date(8640000)));
console.log(validDate([1,2,4,0]));