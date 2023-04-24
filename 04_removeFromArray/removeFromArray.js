const removeFromArray = function(array, ...vari) {
    let ex= []
    array.forEach(elm=>{
 if (!vari.includes(elm)){   // if the element is not in the list of items to be excluded (...vari) then push to ex array
    ex.push(elm)
 }
    })

    return ex
};

console.log(removeFromArray([1,2,3],2))
// Do not edit below this line
module.exports = removeFromArray;
