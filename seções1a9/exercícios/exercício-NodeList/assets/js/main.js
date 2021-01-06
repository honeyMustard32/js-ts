const paragraphs = document.querySelector('.paragrafos');
const ps = paragraphs.querySelectorAll('p'); // retorna uma NodeList

/*
**Uma NodeList não é uma array javascript, mas se comporta como uma
**Ela parte do DOM, da API do browser
**Por ser muito parecido com uma array, nós podemos usar como se fosse uma
*/

// console.log(ps);

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;
// console.log(backgroundColorBody);

for (let i of ps) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = '#FFFFFF';
}
