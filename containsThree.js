function hasThree(num){
         return num.toString().split("").some(function(item){
          return item === "3";
         }); 
    }
