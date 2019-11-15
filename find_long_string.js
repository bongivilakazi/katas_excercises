//create an array add strings to it
//create another array and leave it empty
var myArray= ["Sibongile","Tomato","juices"]
var wholeArr = []
//create a function
function longestString(arr) {
var wordlength = 0
//place a forloop to loop throught the elements of an array
    for(var i = 0; i < myArray.length; i++){
      if(wordlength < myArray[i].length){
        wordlength = myArray[i].length;
      }
    }
    for(var j =0; j < myArray.length; j++){
      if(myArray[j].length == wordlength){
         wholeArr.push(myArray[j]);//push elemets through the empty array
      }
    }
   if(wholeArr.length == 1){
     return wholeArr[0]
   }else{
      return wholeArr
  }
}

console.log(longestString(myArray))



























var long1= 0;

var plorp = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

function longestString(arr){
  for (i=0; i<arr.length; i++){
      if (arr[i].length > long1){
        long1= arr[i].length;
      }

  }
  return long1;
}