/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let stack = [];
    const openingBrackets = "({[";
    const closingBrackets = ")}]";

    for (const char of s) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        }

        else if (closingBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            else if (isMatch(stack.at(-1), char)) {
                stack.pop();
            }
            else {
                return false;
            }

        }
    }

    return (stack.length === 0);
};

/**
 * @param {string} openingBracket
 * @param {string} closingBracket
 * @return {boolean} - Returns whether the opening and closing parentheses match each other.
 */
function isMatch(openingBracket, closingBracket) {
    if (openingBracket === "(") {
        return (closingBracket === ")")
    }
    else if (openingBracket === "{") {
        return (closingBracket === "}")
    }
    else if (openingBracket === "[") {
        return (closingBracket === "]")
    }
    else {
        console.log(`Unexpected brackets provided. \n Opening Bracket: ${openingBracket} \n Closing Bracket: ${closingBracket}`);
    }
}