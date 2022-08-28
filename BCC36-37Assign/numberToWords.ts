
    
    
    const unitDigit = ["","One ","Two ","Three ","Four ","Five ","Six ","Seven ","Eight ","Nine "];
    const tensDigit = ["","","Twenty ","Thirty ","Forty ","Fifty ","Sixty ","Seventy ","Eighty ","Ninety "];
    const teens = ["Ten ","Eleven ","Twelve ","Thirteen ","Fourteen ","Fifteen ","Sixteen ","Seventeen ","Eighteen ","Nineteen "];
    const tens_pwr = ["","Thousand ","Million ","Billion ","Trillion ","Quadrillion ","Quintillion ","Sextillion "];
    let calc = new Array  ;
    let i;
    let Word ;



    // functions takes in a large number and divides it into sets of "3" and puts them in an array called "calc" and also sets a "counter"
    // that counts how many sets of "3" numbers are there which will define "tens_pwr" of the number
    function numberToWords(i) {
        Word ="";
        calc = [];
    
        let counter = 0;
                  
        while (i > 999) {
            counter ++;
            calc.push(i % 1000);
            i = Math.floor(i /1000);
           
        } 

        calc.push(i);
        calc.reverse();
        let count = counter;

        // this calls for another function what puts numbers "< 999"  into "Words" and also adds tens_pwr defining how big is number
        for (var j = 0; j <= counter; j++){
            if (calc[j] !== 0)
                Word += uptoHundred(calc[j]) + tens_pwr[count];
            count--;
         

        }
        console.log(Word);
            
}
// this function converts all numbers " < 999" into WORDS
function uptoHundred(value) {
    
    let spell ="";
    if (value == 0)
        return ("Zero ");
    while (value > 0)
    {
        if (value > 99){
            spell += unitDigit[Math.floor(value / 100)] + "Hundred ";
            value -= (Math.floor(value / 100) * 100);
        }else if (value >= 20) {
            spell += tensDigit[Math.floor(value / 10)];
            value -= (Math.floor(value / 10) * 10) ;
            //console.log(spell, value);
        }
        else if (value >= 10) {
            spell += teens[value % 10];
            value = 0;
        }
        else if (value % 10 == 0){
            spell += tensDigit[value / 10];
            value = 0;
        }
        else if(value < 10){
            spell += unitDigit[value];
            value = 0;
        }
          
    }return (spell);
}


           
// this function prints series of NUMBERS INTO WORDS
function printingSeriesOfNumbers() {
     
    for (i = 1000; i<=1030 ; i++) {
        numberToWords(i) + "/n";
    }
}
   
numberToWords(999999999999999); // THIS FUNCTION IS THE CALL TO THE MAIN FUNCTION THAT WILL CONVERT THE NUMBER INTO WORDS
//printingSeriesOfNumbers();




