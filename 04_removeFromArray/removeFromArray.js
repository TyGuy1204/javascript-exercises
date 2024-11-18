const removeFromArray = function(arr, ...args) {
    let temp = 0;
    for(let i = 0; i < args.length; i++){
       while(arr.includes(args[i])){
        temp = arr.splice(arr.indexOf(args[i]),1);
       }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
