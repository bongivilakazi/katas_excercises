//create a function 
 function iscoceles(number) {
  for (var i = 0; i < number; i++) {
    var str = '';// create an empty variable
    for (var j = 1; j < number-i; j++) {
      str = str + ' ';//assign the variable string to the var string variable
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '*'
    }
  
    //multiply i by 2 and add 1
      //place a forloop to loop through 
    console.log(str);
  }
}

iscoceles(8);//pass in any number to print a pyramid