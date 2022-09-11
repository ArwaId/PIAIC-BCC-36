function removeDuplicates(num) {
    var x;
    var check = [];
    var result= [];
        for (x in num){
            if (check.indexOf(num[x]) == -1)
                {check[x]= num[x];
                result.push(num[x]); }

        }
        console.log(result.sort());
  }
  var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  