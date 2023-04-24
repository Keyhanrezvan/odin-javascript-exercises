const reverseString = function(string) {


    let opp = string.split("") //takes string a breaks down into array of letters
    let rev = opp.reverse()  //takes array and reverses
  let reversed= rev.join("")  //takes array and joins creating a string

return reversed
};

console.log(reverseString("duck"))
// Do not edit below this line
module.exports = reverseString;
