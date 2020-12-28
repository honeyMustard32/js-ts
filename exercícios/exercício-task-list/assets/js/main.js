//Sempre tentar distribuir as diferentes ações do software em diferentes funções

const taskInput = document.querySelector('.task-inpt');
const taskButton = document.querySelector('.task-btn');
const taskList = document.querySelector('.task-lst');

taskInput.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!taskInput.value) return;
        createTask(taskInput.value);
    }
})

function cleanInput() {//para limpar a caixa de input após adicionar uma tarefa
    taskInput.value = '';
    taskInput.focus();//coloca o cursor piscando na caixa do input
}

function createButtonErase(li) {
    li.innerText += '   ';
    const eraseButton = document.createElement('button');
    eraseButton.innerText = 'Apagar';
    // eraseButton.classList.add('erase'); //assim adiciona uma classe no html erase button
    eraseButton.setAttribute('class', 'erase'); //assim tbm adiciona, mas serve para adicionar qualquer tipo de atributo, é mais fácil
    eraseButton.setAttribute('title', 'Apagar esta tarefa'); //quando o cursor passar e ficar no botão, aparece a descrição
    li.appendChild(eraseButton);
}

function createElementLi() {
    const li = document.createElement('li');
    return li;
    //li é a tag de elementos de uma lista
}

function createTask(textInput) {
    const li = createElementLi();
    li.innerText = textInput;
    taskList.appendChild(li);
    cleanInput();
    createButtonErase(li);
    saveTasks();
}

taskButton.addEventListener('click', function(e) {
    if (!taskInput.value) return;
        /*caso não tenha nada na caixa de entrada não será adicionada uma tarefa vazia
        **uma string vazia é um falsy que avalia como false, ou seja,
        **o valor de taskInput.value é false
        **com o not (!), a expressão fica avaliada como true, então roda o if
        **se inserir algo na caixa, taskInput fica avaliado como true, então,
        **o operador not transforma em false e o if não roda
    */

    createTask(taskInput.value);
})

document.addEventListener('click', function (e) {
    const element = e.target //uma variável com a tag do html em que aconteceu o click

    if (element.classList.contains('erase')) {
        element.parentElement.remove(); //some a tarefa da tela
        saveTasks(); // tira a tarefa do local storage do navegador
    }

})

function saveTasks() {
    const taskLi = taskList.querySelectorAll('li');
    const tasksList = [];

    for (let t of taskLi) {
        let taskText = t.innerText;
        taskText =  taskText.replace('Apagar', '').trim();
        tasksList.push(taskText);
    }

    //aqui entra o código para salvar a lista de tarefas
    const taskJSON = JSON.stringify(tasksList); 
        /*converte a array numa string para que ela possa ser armazenada em um local no sistema
        **assim nós podemos resgatar essa lista sempre que ligarmos nossa lista de tarefas
        **essa string pode ser convertida novamente para uma array
    */
        localStorage.setItem('tasks', taskJSON); 
        /*salva num servidor local do próprio navegador, uma mini base de dados
        **fica salvo no global do navegador, pode ser usado em qualquer parte do sistema
    */
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks'); //resgata da memória do navegador a string das tarefas salva
    const tasksList = JSON.parse(tasks) //converte a string de volta em uma array, converte de novo para um objeto javascript

    for (let t of tasksList) {
        createTask(t);
    }
}
addSavedTasks();
