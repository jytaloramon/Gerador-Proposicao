export default class PropositionAtomic {

    constructor(character) {
        this.character = character;
        this.signe = Math.random() <= 0.3 ? '~' : '';
    }

    toString() {
        return this.signe + this.character;
    }

}