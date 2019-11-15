//create a Function 
function combinedArray(arr1, arr2){
  //create an if statements comparing lengths of an array
  if(arr1.length == arr2.length){
    //create an empty array where the new values will be pushed in 
      var arrayCombination = [];
      for(var i=0; i<arr1.length; i++){
        //push the values into the array
          arrayCombination.push(arr1[i], arr2[i]);
      }
      //log out the array created
      console.log(arrayCombination)
      //else log out the array created with elemets pushed in them
  }else{
     console.log(arrayCombination)
  }
 }
 //pass in arrays with elements in them
 combinedArray([11,22,33], [1,2,3])
