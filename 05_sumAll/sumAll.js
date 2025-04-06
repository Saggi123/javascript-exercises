const sumAll = function(arg1,arg2) {

    if(Number.isInteger(arg1)==false || Number.isInteger(arg2)==false || arg1<0 || arg2<0)
        return 'ERROR'

    else
    {
        var addedvalue=0;

        if(arg1<arg2)
        {
            for(let i=arg1;i<=arg2;i++)
                addedvalue+=i;
        }
        else
        {
            for(let i=arg2;i<=arg1;i++)
                addedvalue+=i;
        }


        return addedvalue
    }
};

// Do not edit below this line
module.exports = sumAll;
