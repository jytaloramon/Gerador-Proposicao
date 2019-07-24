module.exports.generate = function () {
    const key = Math.floor(Math.random() * 100);
    return conectores[key];
}

module.exports.getWeightConnector = function (key){
    return conectores[key];
}

const conectores = {
    "^": 17,
    "v": 13,
    "=>": 11,
    "<=>": 7
}