// Escreva um função que recebe dois números e retorne o maior deles
// O exercício em si era só para criar a função mesmo

// function maxNumber (num1, num2) {
//     return num1 < num2 ? num1 : num2; // Ternário para simplificar, só tem duas opções
// }

const maxNumber = (num1, num2) => num1 < num2 ? num1 : num2; // simplicar o código usando arrow function

function createParagraph () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg) {
    const resultado = document.querySelector('.result');
    const p = createParagraph();

    p.innerHTML += msg;
    resultado.appendChild(p);
}

const form = document.querySelector('.form');

form.addEventListener('submit', function recieveEvent(event) {
    event.preventDefault();

    const num1Input = form.querySelector('#num1');
    const num2Input = form.querySelector('#num2');

    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);

    if ( !num1 || !num2) {
        return setResultado('Apenas números! No caso de decimais, use o ponto como separador.')
    } else if (num1 === num2) {
        return setResultado('Números são iguais!')
    }
    const resultNumber = maxNumber(num1, num2);

    const msg = `O maior número é ${resultNumber}.`

    setResultado(msg);

});