const repeatString = function(word,count) 
{
    if(count<0)
        return 'ERROR';
    else if(word=='')
        return '';
    else if(count==0)
        return ''
    else
    {
        var concatword=word;
        for(let i=1;i<count;i++)
        concatword+=word;
        
        return concatword
    }
};

// Do not edit below this line
module.exports = repeatString;
