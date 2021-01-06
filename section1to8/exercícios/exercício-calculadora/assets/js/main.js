/**
 * Factory function -> função que retorna um OBJETO
 * Arrow functions não mudam o comportamento do this, ela apenas trava o this em quem criou o elemento
 * Ou seja, com uma arrow function, não será criada uma nova instância para o this
 * o this continuará sendo o que era anteriormente
*/
function createCalculator() {
    return {
            /**
             * Tudo dentro do objeto é uma chave
             * Essas chaves podem ser um atributo ou um método
             * A ordem é: primeiro vem os atributos, depois vem os métodos do objeto 
             * Não é uma regra, mas mantém organizado, pode ser invertido tbm
            */
        display: document.querySelector('.display'), //esse é um ATRIBUTO do objeto
        
        start() { //isso aqui é um MÉTODO do objeto
            // alert('Bora fazer matemática');
            this.clickButtons();
                /** 
                 * Toda vez que eu quiser referenciar uma chave do objeto, dentro do próprio objeto, eu uso THIS
                 * Nesse caso, o this referencia CALCULATOR
                 * Pq quem chama o método start, é a const calculator, então o .this referencia quem o chama
                 * Quem chama a função é quem é o this
                */
            this.keyEnter();
        },

        clickButtons() {
            document.addEventListener('click', (e) => { //na arrow function, os () em parâmetro único é opcional
                const element = e.target; //identifica o que está recebendo o click
                // console.log(this)
                    /**
                     * o this será quem chama o clickButtons(), que é a const calculator
                     * pq foi usada uma arrow function, não cria uma nova instância do this
                     * se usasse a forma clássica de declarar função (function () {...})
                     * uma nova instância seria criada para o this, daí
                     * printa document, pq quem chama a função é o document.addEventListener 
                    */
                if(element.classList.contains('btn-num')) {
                    this.btnToDisplay(element.innerText);
                        /** 
                         * .innerText é o texto que está sendo mostrado pelo botão
                         * E é o valor (value) que será mandado para o método btnToDisplay(value)
                        */
                }

                if(element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                
                if(element.classList.contains('btn-del')) {
                    this.deleteLast();
                }
                
                if(element.classList.contains('btn-eq')) {
                    this.equals();
                }
            });
            // }.bind(this));
            /**
             * Poderia alterar a instância do this dessa forma tbm
             * Esse bind fala pra função usar o this (quem chama) do document, que é o calculator
             * Sem ele, o this.btnToDisplay() não funciona, pq usa o document como o this
             */
        },

        keyEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.equals();  
                }
            });
        },

        btnToDisplay(value) {
            this.display.value += value; 
                /**
                 * concatenando os valores no display, 
                 * para realizar a conta depois de clicar no botão =
                */ 
            this.display.focus();
                /**
                 * após digitar um número
                 * coloca o cursor de volta no display da calculadora
                 * assim evita o bug de quando apertar o enter ele adicionar
                 * o último número que foi digitado no display
                 */
        },

        clearDisplay() {
            this.display.value = '';
                /**
                 * Substitui o que estiver no display por uma string vazia
                 */
        },

        deleteLast() {
            this.display.value = this.display.value.slice(0, -1);
        },

        equals() {
            let operation = this.display.value;
            try {
                result = eval(operation);
                    /**
                     * Essa função é meio perigosa
                     * Basicamente, qualquer coisa que vc colocar dentro ela executa como código javascript
                     * Então se alguém digitar qualquer código javascript no display da calculadora
                     * A calculadora vai executar
                     * O prof não recomenda o uso dela
                     * Mas como o objetivo do exercício é apenas mostrar como se usa as factory functions 
                     * ele usa essa eval para simplificar e agilizar a aula
                     */
                if (!result) { //para o caso da conta ser inválida
                    alert('Conta inválida, mano (ou mana).');
                }
                
                this.display.value = String(result);
            } catch (e) {
                alert('Conta inválida, mano (ou mana).');
                return;
            }
        },

    };
}

const calculator = createCalculator();
calculator.start();
