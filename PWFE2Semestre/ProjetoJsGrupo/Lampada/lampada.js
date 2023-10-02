// Obtém uma referência ao elemento HTML com a ID 'turnOnOff'
var turnOnOff = document.getElementById('turnOnOff');

// Obtém uma referência ao elemento HTML com a ID 'lamp'
var lamp = document.getElementById('lamp');

// Função que verifica se a lâmpada está quebrada com base na URL da imagem
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

// Função que liga a lâmpada (se não estiver quebrada)
function lampOn() {
    if (!isLampBroken()) {
        lamp.src = 'img/ligada.jpg';
    }
}

// Função que desliga a lâmpada (se não estiver quebrada)
function lampOff() {
    if (!isLampBroken()) {
        lamp.src = 'img/desligada.jpg';   
    }
}

// Função que quebra a lâmpada (alterando a imagem para uma imagem quebrada)
function lampBroken() {
    lamp.src = 'img/quebrada.jpg';
}

// Função que liga ou desliga a lâmpada com base no texto do botão
function lampOnOff() {
    if (turnOnOff.textContent === 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

// Adiciona um ouvinte de evento de clique ao botão 'Ligar/Desligar'
turnOnOff.addEventListener('click', lampOnOff);

// Adiciona um ouvinte de evento de passagem do mouse sobre a lâmpada para ligá-la
lamp.addEventListener('mouseover', lampOn);

// Adiciona um ouvinte de evento de saída do mouse da lâmpada para desligá-la
lamp.addEventListener('mouseleave', lampOff);

// Adiciona um ouvinte de evento de clique duplo na lâmpada para quebrá-la
lamp.addEventListener('dblclick', lampBroken);
