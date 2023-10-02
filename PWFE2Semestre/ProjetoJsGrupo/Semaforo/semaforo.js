// Seleciona o elemento HTML da imagem do semáforo com a ID 'img'
const img = document.getElementById('img');

// Seleciona o elemento HTML dos botões de controle com a ID 'buttons'
const buttons = document.getElementById('buttons');

// Inicializa o índice da cor atual do semáforo como 0
let colorIndex = 0;

// Inicializa a variável que será usada para armazenar o ID do intervalo
// para controlar a troca automática de cores do semáforo
let intervalId = null;

// Função de callback que é chamada quando um dos botões é clicado
const trafficLight = (event) => {
    // Interrompe a troca automática de cores
    stopAutomatic();
    
    // Liga a cor correspondente ao botão clicado
    turnOn[event.target.id]();
}

// Função que calcula o próximo índice de cor (circularmente)
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

// Função que muda a cor do semáforo de acordo com o índice atual
const changeColor = () => {
    // Lista de cores disponíveis
    const colors = ['red', 'yellow', 'green'];
    
    // Obtém a cor com base no índice atual
    const color = colors[colorIndex];
    
    // Liga a cor atual
    turnOn[color]();
    
    // Calcula o próximo índice de cor
    nextIndex();
}

// Função que interrompe a troca automática de cores do semáforo
const stopAutomatic = () => {
    clearInterval(intervalId);
}

// Objeto que mapeia cores e ações para ligar essas cores
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    // Define a ação 'automatic' para trocar automaticamente as cores a cada segundo
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

// Adiciona um ouvinte de evento de clique aos botões de controle
buttons.addEventListener('click', trafficLight);
