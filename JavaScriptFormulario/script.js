function Concatenar() {
    var Nome = document.getElementById('MeuForm').pNome.value;
    var Sobrenome = document.getElementById('MeuForm').sNome.value;

    alert(Nome + " " + Sobrenome);
}

function Somar() {
    var N1 = document.getElementById('MyCalc').n1soma.value;
    var N2 = document.getElementById('MyCalc').n2soma.value;

    var Soma = parseInt(N1) + parseInt(N2);
    alert("O resultado da soma é: " + Soma);
}

function Subtrair() {
    var N1 = document.getElementById('MyCalc').n1sub.value;
    var N2 = document.getElementById('MyCalc').n2sub.value;

    var Sub = parseInt(N1) - parseInt(N2);
    alert("O resultado da subtração é: " + Sub);

}

function Multiplicar() {
    var N1 = document.getElementById('MyCalc').n1mult.value;
    var N2 = document.getElementById('MyCalc').n2mult.value;

    var Mult = parseInt(N1) * parseInt(N2);
    alert("O resultado da multiplicação é: " + Mult);

}

function Dividir() {
    var N1 = document.getElementById('MyCalc').n1div.value;
    var N2 = document.getElementById('MyCalc').n2div.value;

    if (N2 == 0) {
        alert("Não dividirás por 0!");
    } else {
        var Div = parseFloat(N1) / parseFloat(N2);
        alert("O resultado da divisão é: " + Div);
    }
}