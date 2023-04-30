const sumAll = function(first, second) {
if (first < 0 || second < 0) return 'ERROR'
if (!Number.isInteger(first) || !Number.isInteger(second)) return 'ERROR'

if (first > second) {
    let temp = first
    first=second
    second =temp
}

    let sum = 0

    for (let i=first; i < second +1; i++){
        sum+=i
    }
    return sum
};

//console.log(sumAll(1,3))
// Do not edit below this line
module.exports = sumAll;
