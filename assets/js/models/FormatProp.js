class Pilha {
    constructor() {
        this.count = 0;
    }

    empty() {
        return !this.count;
    }

    push() {
        this.count++;
    }

    pop() {
        if (this.empty())
            throw "Erro: numero de parenteses falta!"
        this.count--;
    }
}

module.exports.verifyBalance = function (tokens, charOpen, charClose) {
    const pilha = new Pilha();

    for (const token of tokens) {
        if (token === charOpen)
            pilha.push();
        else if (token == charClose)
            pilha.pop();
    }

    return pilha.empty();
}

module.exports.removeFistLastParentheses = function (tokens, charOpen, charClose) {
    if (tokens[0] !== '(')
        return;

    const pilha = new Pilha();

    try {
        for (let i = 1; i < tokens.length - 1; i++) {
            if (tokens[i] === charOpen)
                pilha.push();
            else if (tokens[i] == charClose)
                pilha.pop();
        }
    } catch (error) {
        return;
    }


    if (pilha.empty()) {
        tokens.shift();
        tokens.pop();
    }
}
