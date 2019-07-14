import PropositionAtomic from './PropositionAtomic.js';
import conectorLogic from './conectorLogic.js';

export default class Proposition {

    constructor(characteres, numPropAtomic) {
        this.characteres = characteres;
        this.numPropAtomic = numPropAtomic;
        this.isParenthesis = Math.random() <= 0.35;
        this.elements = Array();
        this.generate();
    }

    generate() {
        const lenghtChar = this.characteres.length;

        for (let i = 0; i < this.numPropAtomic; i++) {
            const character = this.characteres[Math.floor(Math.random() * lenghtChar)];
            this.elements.push((new PropositionAtomic(character)).toString());

            if (i < this.numPropAtomic - 1)
                this.elements.push(conectorLogic());
        }
    }

    toString() {
        let str = '';
        this.elements.forEach(el => {
            str += el + '';
        });

        return this.isParenthesis ? '(' + str + ')' : str;
    }
}