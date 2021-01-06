const number = Number(prompt('Digite seu número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = number;
texto.innerHTML += `<p>Raiz quadrada: ${number ** 0.5}</p>`
texto.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(number)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`

// document.body.innerHTML += `Raiz quadrada: ${number ** 0.5}`;
// document.body.innerHTML += `${number} é inteiro: ${Number.isInteger(number)}`;
// document.body.innerHTML += `É NaN: ${Number.isNaN(number)}`;
// document.body.innerHTML += `Arredondado para baixo: ${Number.(number)}`;
// document.body.innerHTML += `Arredondado para cima: ${Number.isNaN(number)}`;
// document.body.innerHTML += `Com duas casas decimais: ${Number.isNaN(number)}`;

