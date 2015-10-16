// http://www.codewars.com/kata/53d3173cf4eb7605c10001a8

function power(s) {
  var set = [];
  for (var n = Math.pow(2, s.length) - 1; n >= 0; n--) {
    var subset = [];
    var elms = n.toString(2).split('');
    while (elms.length < s.length) { elms.unshift('0'); }
    for (var i = 0; i < elms.length; i++) {
      if (elms[i] == '1') {
        subset.push(s[i]);
      }
    }
    set.push(subset);
  }
  return set;
}

console.log(power([1, 2, 3, 4]));