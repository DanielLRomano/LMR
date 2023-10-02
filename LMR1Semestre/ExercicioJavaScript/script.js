function Cadastro() {
    let pNome = document.getElementById('pNome').value;
    let sNome = document.getElementById('sNome').value;
    let bairro = document.getElementById('bairro').value;
    let rua = document.getElementById('rua').value;
    let nCasa = document.getElementById('nCasa').value;
    let email = document.getElementById('email').value;
    let cEmail = document.getElementById('cEmail').value;
    let senha = document.getElementById('senha').value;
    let cSenha = document.getElementById('cSenha').value;

    if (pNome === "") {
        alert("Preencher o campo 'Nome'")
    }
    if (sNome === "") {
        alert("Preencher o campo 'Sobrenome'")
    }
    if (bairro === "") {
        alert("Preencher o campo 'Bairro'")
    }
    if (rua === "") {
        alert("Preencher o campo 'Rua'")
    }
    if (nCasa === "") {
        alert("Preencher o campo 'Nº'")
    }
    if (email === "") {
        alert("Preencher o campo 'Email'")
    }
    if (cEmail === "") {
        alert("Preencher o campo 'Confirmar Email'")
    }
    if (senha === "") {
        alert("Preencher o campo 'Senha'")
    }
    if (cSenha === "") {
        alert("Preencher o campo 'Confirmar Senha'")
    }
    if (email != cEmail) {
        alert("Emails divergentes, favor verificar.")
    } else if (senha != cSenha) {
        alert("Senhas divergentes, favor verificar.")
    } else if (pNome != "" && sNome != "" && bairro != "" && rua != "" && nCasa != "" && email != "" && cEmail != "" && senha != "" && cSenha != "") {
        alert("Cadastro realizado com sucesso!!")
    } else { }
}

function Email() {
    if (email != cEmail) {
        alert("Emails divergentes, favor verificar.")
    }
}

function Senha() {
    if (senha != cSenha) {
        alert("Senhas divergentes, favor verificar.")
    }
}