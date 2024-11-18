const sumAll = function(num1,num2) {
    let sum  = 0;
    if((Number.isInteger(num1) && Number.isInteger(num2))!=true || (!(num1>=0) || !(num2>=0))){
        return "ERROR";
    }
    else{
        
        if(num1 == num2){
            return num1;
        }
        else if(num1 < num2){
            for(let i  = num1; i <= num2; i++){
                sum+=i;
            }
        }
        else if(num2 < num1){
            console.log("Entered conditional");
            for(let j = num2; j <= num1; j++){
                console.log("Entered loop");
                sum += j;
            }
        }
        return sum;
    }
}

// Do not edit below this line
module.exports = sumAll;
