const getWeightConnector = require('./conectorLogic').getWeightConnector;
const removeFistLastParentheses = require('./FormatProp').removeFistLastParentheses;

class Tree {

    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

module.exports.generate = function generate(tokens) {
    if (tokens.length < 1)
        return '';

    removeFistLastParentheses(tokens, '(', ')');
    console.log(tokens);
    const length = tokens.length;
    const index = searchMinWeight(tokens, 0, length);

    const left = tokens.slice(0, index);
    const rigth = tokens.slice(index + 1, length);

    const resultLeft = generate(left);
    const resultRight = generate(rigth);

    return tokens ;
}

function searchMinWeight(tokens, start, end) {
    let minWeight = 21454545445, indexMinWeight = 0, multiple = 1;

    for (let index = start; index < end; index++) {
        if (tokens[index] === '(')
            multiple *= 1000;
        else if (tokens[index] === ')')
            multiple /= 1000;
        else {
            const result = getWeightConnector(tokens[index]) * multiple;
            if (result && result < minWeight) {
                minWeight = result;
                indexMinWeight = index;
            }
        }
    }

    return indexMinWeight;
}