<?php
// Conexão com o banco de dados (substitua as credenciais com as suas)
$servername = "localhost";
$username = "root";
$password = "";
$database = "megapetmart";

$conn = new mysqli($servername, $username, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Processamento dos dados do formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar os dados do formulário (substitua com validações específicas)
     $nome = $_POST["nome"];
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $senha = password_hash($_POST["senha"], PASSWORD_BCRYPT); // Recomendado armazenar senhas de forma segura
    $logradouro = $_POST["logradouro"];
    $numero = $_POST["numero"];
    $complemento = $_POST["complemento"];
    $bairro = $_POST["bairro"];
    $cep = $_POST["cep"];
    $estado = $_POST["estado"];
    $cidade = $_POST["cidade"];

    // Verificar se a validação foi bem-sucedida
    if ($email === false) {
        echo "Email inválido. Por favor, forneça um email válido.";
        exit();
    }
      /*  // Verificar se a validação foi bem-sucedida
    if (empty($nomeCompleto) || empty($email) || empty($senha) || empty($cep) || empty($estado) || empty($cidade)) {
        $_SESSION["error_message"] = "Por favor, preencha todos os campos obrigatórios.";
        header("Location: http://localhost/KingPetShopXampp/registro.html");
        exit();
    }*/

    // Inserir os dados no banco de dados usando uma consulta preparada
    $sql = "INSERT INTO usuarios_adm (email, senha, logradouro, numero, complemento, bairro, cep, estado, cidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Erro na preparação da consulta: " . $conn->error);
    }

    $stmt->bind_param("sssssssss", $email, $senha, $logradouro, $numero, $complemento, $bairro, $cep, $estado, $cidade);

    if ($stmt->execute()) {
        // Cadastro bem-sucedido. Redirecione para a página de login.
        header("Location: http://localhost/Projeto2Semestre/login_adm.html");
        exit();
    } else {
        echo "Erro no cadastro. Por favor, tente novamente mais tarde.";
        // Pode ser interessante registrar os detalhes completos do erro em logs do servidor
    }

    $stmt->close();
}

// Fechar a conexão com o banco de dados
$conn->close();
?>