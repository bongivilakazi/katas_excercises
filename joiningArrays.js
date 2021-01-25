function combinedArray(arr1, arr2) {
  if (arr1.length == arr2.length) {
    var arrayCombination = [];
    for (var i = 0; i < arr1.length; i++) {
      arrayCombination.push(arr1[i], arr2[i]);
    }
    console.log(arrayCombination);
  } else {
    console.log(arrayCombination);
  }
}
combinedArray([11, 22, 33], [1, 2, 3]);

