const reverseString = function(word) {
if(word=='')
    return ''

else{
    var reversedstring='';

    for(let i=word.length-1;i>=0;i--)
        reversedstring+=word.charAt(i)

    return reversedstring;
}
};

// Do not edit below this line
module.exports = reverseString;
