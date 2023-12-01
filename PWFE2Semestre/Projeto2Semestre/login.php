<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "king";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos necessários estão definidos no array $_POST
    if (isset($_POST["loginEmail"]) && isset($_POST["loginSenha"])) {
        $loginEmail = $_POST["loginEmail"];
        $loginSenha = $_POST["loginSenha"];

        $sql = "SELECT id, senha FROM usuarios WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $loginEmail);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();

            // Verifica a senha
            if (password_verify($loginSenha, $row["senha"])) {
                // Autenticação bem-sucedida
                $_SESSION["usuario_id"] = $row["id"];
                header("Location: http://localhost/KingPetShopXampp/dashboard.php"); // Redirecionar para a página de dashboard ou outra página após o login
                exit();
            } else {
                echo "Credenciais incorretas. Tente novamente.";
            }
        } else {
            echo "Usuário não encontrado. Verifique o email e tente novamente.";
        }

        $stmt->close();
    } else {
        echo "Campos obrigatórios não foram preenchidos.";
    }
}

$conn->close();
?>