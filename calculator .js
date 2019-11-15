function addition(f,g)
{ var sum = 0;
var sum = f + g;
return sum;

}
addition(3,4);
/************************************************************************************* */
function multiply(c,d)
{
var product = 0;
var product = c * d;
return product;

}
multiply(3,4);
/************************************************************************************ */
function AddMultipleNumbers()
{
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    }
    return sum;  
}
console.log("Adding numbers");
console.log(AddMultipleNumbers(1,2,3,10));
 
//*************************************************************************************** */
function multiplyMultipleNumbers(){
    var product = 1;
    for(var i = 0; i < arguments.length; i++){
        product = product * arguments[i];
    }
    return product;
}
console.log("multiplying numbers");
console.log(multiplyMultipleNumbers(1,2,3,10));
/************************************************************************************* */