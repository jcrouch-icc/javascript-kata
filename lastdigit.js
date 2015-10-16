// http://www.codewars.com/kata/5511b2f550906349a70004e1
var lastDigit = function(str1, str2){
  var pattern = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [6, 2, 4, 8],
    [1, 3, 9, 7],
    [6, 4, 6, 4],
    [5, 5, 5, 5],
    [6, 6, 6, 6],
    [1, 7, 9, 3],
    [6, 8, 4, 2],
    [1, 9, 1, 9]
  ];
  
  return pattern[str1.slice(-1)][str2.slice(-4) % 4];
}

console.log(lastDigit(process.argv[2], process.argv[3]));