const palindromes = function (string) {
    let cleanString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " " || string[i] === "," || string[i] === "." || string[i] === "!") {
            continue;
        } else {
            cleanString += string[i].toLowerCase();
        }
    }
    let backwardsString = "";
    for (let i = cleanString.length - 1; i >= 0; i--) {
        backwardsString += cleanString[i];
    }

    if (cleanString === backwardsString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
