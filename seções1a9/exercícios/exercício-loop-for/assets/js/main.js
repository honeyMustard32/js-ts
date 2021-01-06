const list = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'}
];

const dom = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i<list.length; i++) {
    let { tag, text } = list[i]; //Desestruturação de objetos, associação via desestruturação
    let createTag = document.createElement(tag);
    
    // // com innerTag tbm funciona, mas é diferente pq o HTML em si não existe, com o innerTExt é mais seguro para evitar bugs
    // createTag.innerText = text;

    // o jeito abaixo é criando um node text
    let nodeText = document.createTextNode(text);
    createTag.appendChild(nodeText);
    
    div.appendChild(createTag);
}

dom.appendChild(div);
/*
* Se der um ctrl+U na página do chrome com o exercío, mostra o HTML original da página
* Não vai ter nenhuma desses tags no HTML original da página
* Mas vc der o inspect vc vai achar todas as childs criadas
* Elas foram adicionadas via JavaScript, não existem no HTML original da página
*/