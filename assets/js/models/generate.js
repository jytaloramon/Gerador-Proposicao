import Proposition from './Proposition.js';
import conectorLogic from './conectorLogic.js';

const characteres = ['A', 'B', 'C', 'D', 'E'];
const maxNumProp = 5;
const maxNUmPropAtomic = 3;

export default function (option) {
    const numProposition = Math.floor(Math.random() * maxNumProp + 1);
    const propositions = Array();

    for (let i = 0; i < numProposition; i++) {
        const numPropAtomic = Math.floor(Math.random() * maxNUmPropAtomic + 1);
        propositions.push((new Proposition(characteres, numPropAtomic)).toString());
    }

    if (option == 0)
        return defaultProp(propositions);

    return deducNatural(propositions);
}

function deducNatural(propositions) {
    const numPropAtomic = Math.floor(Math.random() * maxNUmPropAtomic + 1);
    return mountProp(propositions, () => ', ') + ' |-- ' + (new Proposition(characteres, numPropAtomic)).toString();
}

function defaultProp(propositions) {
    return mountProp(propositions, conectorLogic);
}

function mountProp(propositions, separator) {
    let str = '';
    const length = propositions.length;
    for (let i = 0; i < length; i++) {
        str += propositions[i];
        if (i < length - 1)
            str += separator();
    }

    return str;
}

