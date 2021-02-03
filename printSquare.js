function printSquare(digit){
    var pattern = "";
    var k, j;
    for (j = 0; j < digit; j++){
        for (k = 0; k < digit; k++){
            pattern = pattern + "#";
        }
        console.log(pattern);
        pattern = "";
    } 
}
printSquare(4);

	
