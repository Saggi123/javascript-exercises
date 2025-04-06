const removeFromArray = function(array,...args) {
    var filteredarray;

    filteredarray=array.filter(items=>{
        return !args.includes(items)
    });

    return filteredarray
};

// Do not edit below this line
module.exports = removeFromArray;
