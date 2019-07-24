import generate from './models/generate.js';

var exit_generate = $('#exit-generate');
var inpt_radio = $('input[name="inpt-radio"]');

$('#btn-generate').on('click.btn_generate', (e) => {
    exit_generate.empty();
    for (let i = 0; i < inpt_radio.length; i++) {
        if (inpt_radio[i].checked)
            return setResultCanvas(generate(i));
    }
});

function setResultCanvas(result) {
    exit_generate.append('<p>' + result + '</p>');
}
"( E -> E -> A ) <=> ( E <=> C ) v ( C -> E ) ^ ( G ) v Q <=> I -> G"