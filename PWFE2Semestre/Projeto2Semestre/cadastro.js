(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation1');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function Email() {
    let email = document.getElementById('email').value;
    let cEmail = document.getElementById('cEmail').value;
    if (email != cEmail) {
        alert("Emails divergentes, favor verificar.")
    }
}

function Senha() {
    let senha = document.getElementById('senha').value;
    let cSenha = document.getElementById('cSenha').value;
    if (senha != cSenha) {
        alert("Senhas divergentes, favor verificar.")
    }
}

function marcarTermos() {
    document.getElementById("termosButton").onclick = function () {
        if (!document.getElementById("termosButton").classList.contains("clicked")) {
            document.getElementById("avisoTermos").style.display = "block";
        }
    }
}