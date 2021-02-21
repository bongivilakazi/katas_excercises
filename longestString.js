
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
longestString(["oop", "React", "learn"', "eat"]);
               
     function longest(arr){
    let count
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        count = arr[i].length
        newArr.push(count)
    } 
    let checkMaxNum = Math.max(...newArr)
    for(let j = 0; j < arr.length; j++){
        if(checkMaxNum === arr[j].length){
            console.log(arr[j])
        } 
    }
}
longest(['once', 'chicken', 'a', 'time'])




















