
function longestString(arr){
    var number;
    let emptyArray= [];
    for(let i = 0; i < arr.length; i++){
        number = arr[i].length
       emptyArray.push(number)
    } 
    let lengthChecker = Math.max(...emptyArray)
    for(let j = 0; j < arr.length; j++){
        if(lengthChecker === arr[j].length){
            console.log(arr[j])
        } 
    }
}
longestString(["oop", "React", "learn"', "eat"])




















