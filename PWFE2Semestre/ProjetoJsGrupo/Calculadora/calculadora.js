'use strict'; // ativa o modo estrito

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]'); // query selector para selecionar o elemento que parte do id tenha a palavra tecla por isso o * antes do igual 
const operadores = document.querySelectorAll('[id*=operador]'); // id* antes do igual para pegar todos os id que tiver a palavra operador

let novoNumero = true;
let operador; // variavel para armazenar o operador 
let numeroAnterior; // variavel para armazenar o primeiro numero digitado 

const operacaoPendente = () => operador !== undefined; // metodo para verificar se o operador esta vazio

const calcular = () => { // metodo para realizar os calculos caso ouver uma operação pendente
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.textContent.replace('.', '').replace(',', '.'));
        novoNumero = true; // atualizar a tela com o resultado 
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`); // eval função nativa JS para realizar os calculos pegando o numero anterior, o operador e concluindo a conta com o numero atual 
        atualizarDisplay(resultado);
    }
};

const atualizarDisplay = (texto) => { // metodo para concatenar os numeros no display 
    if (novoNumero) {
        display.textContent = texto.toLocaleString('BR'); // metodo para quando selecionar um operador não concatenar os numeros
        novoNumero = false;
    } else {
        display.textContent += texto.toLocaleString('BR');
    }
    document.querySelector('#igual').focus();
};

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent); // pegando o evento de cada botao clicado e imprime no display
numeros.forEach((numero) => numero.addEventListener('click', inserirNumero)); // forEach para varrer os numeros e inserir os numeros no display quando clicado

const selecionarOperador = (evento) => { // metodo para guardar o operador e o primeiro numero digitado e substituir o display com o novo numero 
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace('.', '').replace(',', '.'));
    }
};
operadores.forEach((operador) =>
    operador.addEventListener('click', selecionarOperador)
);

const ativarIgual = () => { // metodo para não realizar mais contas apos ser clicado o botao igual 
    calcular();
    operador = undefined;
};
document.getElementById('igual').addEventListener('click', ativarIgual); // colocando evento no botão igual para realizar as contas

const limparDisplay = () => (display.textContent = ''); // metodo para limpar o display 
document
    .getElementById('limparDisplay')
    .addEventListener('click', limparDisplay);

const limparCalculo = () => { // metodo para limpar todo o calculo e não somente o display 
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
};
document
    .getElementById('limparCalculo')
    .addEventListener('click', limparCalculo);

const removerUltimoNumero = () => // metodo para remover o ultimo numero digitado 
    // A linha abaixo remove o último caractere da string no elemento 'display':
    // O método slice cria uma nova string a partir da original,
    // mantendo todos os caracteres do início até o penúltimo (-1).
    // função slice (somente para arrays, no caso string é um array de caracteres)
    (display.textContent = display.textContent.slice(0, -1));
    
document
    .getElementById('backspace')
    .addEventListener('click', removerUltimoNumero);

const inverterSinal = () => { // metedo para inverter o sinal 
    novoNumero = true;
    atualizarDisplay(display.textContent * -1); // atualiza o display invertendo o sinal do numero 
};
document.getElementById('inverter').addEventListener('click', inverterSinal);

const existeDecimal = () => display.textContent.indexOf(',') !== -1; // metodo para verificar se existe um decimal 
const existeValor = () => display.textContent.length > 0; // metodo para verificar se existe um valor previo digitado
const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (novoNumero) {
            atualizarDisplay('0,'); // se o display estiver vazio e colocar uma virgula irá colocar um 0 antes
        } else {
            atualizarDisplay(','); // coloca virgula se ja exister um numero digitado
        }
    }
};
document.getElementById('decimal').addEventListener('click', inserirDecimal);

const mapaTeclado = { // mapeia as teclas do teclado para inserir na calculadora 
    0: 'tecla0', // associa a tecla clicada ao id informado dos botoes 
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDividir',
    '*': 'operadorMultiplicar',
    '-': 'operadorSubtrair',
    '+': 'operadorAdicionar',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backspace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    ',': 'decimal',
};

const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1; //varre a função e coloca no display somente as teclas mapeadas 
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
};
document.addEventListener('keydown', mapearTeclado);