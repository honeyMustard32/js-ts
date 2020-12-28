/* 
**escreva uma função retorne um booleano ao receber largura e altura de uma imagem
**o booleano deve ser true se a imagem estiver em modo paisagem
**ou false se ela estiver em modo retrato
*/

const landscapeImg = (hei, wid) => wid > hei; // só isso aqui já retorna true ou false, não precisa especificar os resultados possíveis

const createParagraph = () => {
    const p = document.createElement('p');
    return p;
};

const setResult = (msg) => {
    const result = document.querySelector('.result')
    const p = createParagraph();

    p.innerHTML += msg;
    result.appendChild(p);
};

const form = document.querySelector('.form');

form.addEventListener('submit', function recieveEvent (e) {
    e.preventDefault();

    const heiInput = form.querySelector('#height');
    const widInput = form.querySelector('#width');

    const height = Number(heiInput.value);
    const width = Number(widInput.value);

    landscapeImg(height, width) ? 
        setResult('A figura está em paisagem') :
        setResult('A figura não está em paisagem');
})