const reverseString = function(string) {
    let curString  = string;
    let reversedString  = "";
    for(let i = 0; i < string.length; i++){
        reversedString += curString.substr(curString.length-1);
        curString  = curString.substr(0,curString.length-1);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
