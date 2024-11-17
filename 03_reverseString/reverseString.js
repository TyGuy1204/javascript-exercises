const reverseString = function(string) {
    let curString  = string;
    let reversedString  = "";
    for(let i = 0; i < string.length; i++){
        reversedString += curString.substr(curString.length-1);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
