const verifyBalance = require('./FormatProp').verifyBalance;
const TreeExpression = require('./TreeExpression').generate;

//const prop = '( E -> E -> A ) <=> ( E <=> C ) v ( C -> E ) ^ ( G ) v Q <=> I -> G';
const prop = 'A v E v ( U => C ^ B )'
const tokens = prop.split(' ');

try {
    console.log(verifyBalance(tokens, '(', ')') ? 'Tudo certo' : 'Parentese em sobrando');
    console.log(TreeExpression(tokens));
} catch (error) {
    console.log(error)
}

