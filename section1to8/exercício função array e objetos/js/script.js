/*
*IIFE -> Imediatly Invoqued Function Expression
*Não tem nada a ver com esse exercício, mas existe esse tipo de função em javascript
*/
function meuEscopo() { //criar uma função para ter um escopo próprio, onde não tem chance de ter conflito de variáveis
    const form = document.querySelector('.form'); // seleciona o formulário do index.html, ele busca pela classe form
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    /* form.onsubmit = function (event) { // esse é um jeito mais antigo de impedir o problema do recarregamento
    *     event.preventDefault(); // essa linha impede o navegador de recarregar automaticamente, assim não perdemos nossos dados inseridos
    *     alert(1);
    *     console.log('!')
    *}; // aqui leva o ; pq a função foi atribuída com o =
    */

    function recebeEventoForm (event) {
        event.preventDefault();
        const nome = form.querySelector('.nome'); // o form. especifica o lugar onde ele vai procurar a classe
        const idade = form.querySelector('.idade'); // o .idade é a classe que ele tem que encontrar (. significa classe)
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        // console.log(nome.value, idade.value, peso.value, altura.value); // .value para pegar apenas o valor atribuído na classe
        
        const objeto = {
            nome: nome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(objeto);

        /*Um outro jeito, mais direto, é criar o objeto direto no método push
        * pessoas.push({
            nome: nome.value,
            idade: idade.value,
            peso: peso.value,
            altura: altura.value
        });
        */

       console.log(pessoas);

       resultado.innerHTML += `<p>
           ${nome.value}
           ${idade.value}
           ${peso.value}
           ${altura.value}
       </p>`
    }
    form.addEventListener('submit', recebeEventoForm); //esse é um jeito mais moderno, define uma função e aí chama ela dentro do eventListener

} // quando a função é declarada dessa forma não precisa do ; pq o sinal de atribuição (=) não foi usado

meuEscopo();
