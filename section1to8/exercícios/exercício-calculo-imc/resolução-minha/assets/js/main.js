function calcIMC () {
    const form = document.querySelector('.form');
    const imcResultado = document.querySelector('#imcResultado');

    const imc1 = 18.5;
    const imc1Text = 'abaixo do peso'
    const imc2 = 24.9;
    const imc2Text = 'peso normal';
    const imc3 = 29.9;
    const imc3Text = 'sobrepeso';
    const imc4 = 34.9;
    const imc4Text = 'obesidade grau 1';
    const imc5 = 39.9;
    const imc5Text = 'obesidade grau 2';
    const imc6Text = 'obesidade grau 3';

    function recebeEventoForm(event) {
        event.preventDefault();

        const pesoInput = form.querySelector('#peso'); // o # significa id, ele procura o input pelo id
        const alturaInput = form.querySelector('#altura'); // o # funciona da mesma forma que o . para class

        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);

        const imc = peso / (altura * altura);
        // console.log(imc);

        if (imc < imc1) {
            imcResultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)}. Você está ${imc1Text}.</p>`
        } else if (imc >= imc1 && imc <= imc2) {
            imcResultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)}. Você está com no ${imc2Text}.</p>`
        } else if (imc > imc2 && imc <= imc3) {
            imcResultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)}. Você está com ${imc3Text}.</p>`
        } else if (imc > imc3 && imc <= imc4) {
            imcResultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)}. Você está com ${imc4Text}.</p>`
        } else if (imc > imc4 && imc <= imc5) {
            imcResultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)}. Você está com ${imc5Text}.</p>`
        } else if (imc > imc5) {
            imcResultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)}. Você está com ${imc6Text}.</p>`
        } else {
            imcResultado.innerHTML += `<p>Dei pau... :/</p>`
        };
    }
    form.addEventListener('submit', recebeEventoForm); // 1º parâmetro, qual evento ele deve escutar e o 2º a função para acionar ao ocorrer o evento
    /*aqui no .addEventListener eu poderia definir a função com o preventDefault dentro do próprio método!
    * form.addEventListener('submit', function (event) {...função...});
    */
}

calcIMC();
