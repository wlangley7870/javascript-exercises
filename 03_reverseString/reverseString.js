const reverseString = function(string) {

    const inText = string;
    let outText = "";
    
    for(let i = inText.length; i > 0; i--) {

        outText += inText.charAt(i-1)
        
    } 
    return outText

};

// Do not edit below this line
module.exports = reverseString;
