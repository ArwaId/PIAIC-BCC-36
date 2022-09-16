const names = ['arwa','idris','batul','hassan','arwa','hatim','idris','batul'];
let result = [];
let check = [];
function removedup(element,index){
        
        if(check.indexOf(element) == -1){
           // console.log(element,index);
            check.push(element)
            return true;
        
    }else return false;
}

result = names.filter(removedup);
console.log(result);