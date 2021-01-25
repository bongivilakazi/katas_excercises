var pattern = ["chill","relax","eaten"];
var outstretchedWord = function(pattern){
    var longestTerm = pattern.reduce(function(a,b){
    return (a.length > b.length) ? a : b;
  });
    return longestTerm;
}
console.log(outstretchedWord(pattern));























