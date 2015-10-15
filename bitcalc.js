// http://www.codewars.com/kata/52ece9de44751a64dc0001d9/

function calculate(num1,num2){
  return number(num1) + number(num2);
}

function number (str) {
  var arr = str.split('');
  var digit = 1;
  var num = 0;
    console.log(arr);
  for (var n = arr.length - 1; n >= 0; n--) {
    if (arr[n] == "1") {
      num += digit;
    }
    digit *= 2;
  }
  console.log(str + ' - ' + num);
  return num;
}

function calculate2(num1, num2) {
    var arr1 = num1.split(''), arr2 = num2.split('');
    var sum = 0;
    var digit = 1;
    while (arr1.length < arr2.length) {
        arr1.unshift("0");
    }
    while (arr2.length < arr1.length) {
        arr2.unshift("0");
    }
    for (var x = arr1.length - 1; x >= 0; x--) {
        if (arr1[x] == "1") {
            sum+= digit;
        }
        if (arr2[x] == "1") {
            sum+= digit;
        }
        digit *= 2;
    }
    return sum;
}

console.log(calculate2("101", "100"));