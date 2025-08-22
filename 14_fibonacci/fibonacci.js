const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    if(num == 1) return 1;
    let prev1 = 0;
    let prev2 = 1;
    let current = 0;
    for (let i = 2; i <= num; i++) {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
