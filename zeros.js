// http://www.codewars.com/kata/52f787eb172a8b4ae1000a34/
function zeros (n) {
    var zeroes = 0;
    for (var factor = 5; factor <= n; factor*= 5) {
        zeroes += Math.floor(n / factor);
    }
    return zeroes;
}

console.log(zeros(process.argv[2] || 5));