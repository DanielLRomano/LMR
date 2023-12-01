// cadastro.js

// Função para validar o formulário de cadastro
function validarFormularioCadastro() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var senha = document.getElementById("senha").value;
    var confirmSenha = document.getElementById("confirmSenha").value;
    var endereco = document.getElementById("endereco").value;
    var cep = document.getElementById("cep").value;
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;

    if (email === "" || confirmEmail === "" || senha === "" || confirmSenha === "" || endereco === "" || cep === "" || estado === "" || cidade === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (email !== confirmEmail) {
        alert("Os campos de email e confirmar email devem corresponder.");
        return false;
    }

    if (senha !== confirmSenha) {
        alert("Os campos de senha e confirmar senha devem corresponder.");
        return false;
    }

    return true;
}

// Event listener para o envio do formulário de cadastro
var formularioCadastro = document.getElementById("formularioCadastro");
if (formularioCadastro) {
    formularioCadastro.addEventListener("submit", function (e) {
        if (!validarFormularioCadastro()) {
            e.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });
}