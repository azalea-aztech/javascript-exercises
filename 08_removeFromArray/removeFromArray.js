const removeFromArray = function(array, ...args) {
    return array.filter(element => !args.includes(element)); // returns an array containing elements not included in args
};

// Do not edit below this line
module.exports = removeFromArray;
