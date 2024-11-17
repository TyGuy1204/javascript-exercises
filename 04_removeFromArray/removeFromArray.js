const removeFromArray = function(arr,num) {
    let numLocation  = arr.indexOf(num);
    let remElement = arr.splice(numLocation,1);
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
