function Concatenar() {
    var Nome = document.getElementById('MeuForm').pNome.value;
    var Sobrenome = document.getElementById('MeuForm').sNome.value;

    alert(Nome + " " + Sobrenome);
}

let N1;
let N2;
let resultado;

function Somar() {
    N1 = document.getElementById('MyCalc').n1.value;
    N2 = document.getElementById('MyCalc').n2.value;

    if (N1 == "" || N2 == "") {
        alert("Preencher todos os campos")
    } else {
        resultado = parseInt(N1) + parseInt(N2);
        alert("O resultado da soma é: " + resultado);
    }
}

function Subtrair() {
    N1 = document.getElementById('MyCalc').n1.value;
    N2 = document.getElementById('MyCalc').n2.value;

    if (N1 == "" || N2 == "") {
        alert("Preencher todos os campos")
    } else {
        resultado = parseInt(N1) - parseInt(N2);
        alert("O resultado da Subtração é: " + resultado);
    }

}

function Multiplicar() {
    N1 = document.getElementById('MyCalc').n1.value;
    N2 = document.getElementById('MyCalc').n2.value;

    if (N1 == "" || N2 == "") {
        alert("Preencher todos os campos")
    } else {
        resultado = parseInt(N1) * parseInt(N2);
        alert("O resultado da Multiplicação é: " + resultado);
    }

}

function Dividir() {
    N1 = document.getElementById('MyCalc').n1.value;
    N2 = document.getElementById('MyCalc').n2.value;

    if (N1 == "" || N2 == "") {
        alert("Preencher todos os campos")
    } else if (N2 == 0) {
        alert("Não dividirás por 0!");
    } else {
        resultado = parseFloat(N1) / parseFloat(N2);
        alert("O resultado da divisão é: " + resultado);
    }
}
