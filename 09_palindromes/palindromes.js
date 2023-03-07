const palindromes = function (input) {
    const forward = input.toLowerCase().replace(/[\W]/g, "");
    let reverse = forward.split("").reverse().join("");

    return forward === reverse;
};

// Do not edit below this line
module.exports = palindromes;
