function joinArrays(arr1,arr2){
    let firstArray = [];
    let secondArray = [];
    for(let i = 0; i < arr1.length ||i < arr2.length; i++){
        firstArray = [arr1[i],arr2[i]];
        secondArray.push(arr1);
    }
    let str = secondArray.join(','); 
    let thirdArray = str.split(',');

    let combinedArray;
    let mergedArray = [];
    for(let j = 0; j < thirdArray.length; j++){
        combinedArray = parseInt(thirdArray[j]);
        newArray.push(combinedArray);

    }
    console.log(newArray);         
    
}
joinArrays([11,22,33], [1,2,3]);

