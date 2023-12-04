<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sua Loja</title>
</head>
<body>

<nav>
    

        <?php
        // Verifica se o usuário está autenticado
        if (isset($_SESSION["usuario_id"])) {
            // Se sim, mostra informações do usuário e opção para sair
            $usuario_email = isset($_SESSION["usuario_email"]) ? $_SESSION["usuario_email"] : "";
            echo '<li><a href="minha_conta.html">Minha Conta</a></li>';
            echo '<li><a href="meus_pedidos.html">Meus Pedidos</a></li>';
            echo '<li><a href="logout.php">Sair</a></li>';
        } else {
            // Se não, mostra a opção para fazer login
            echo '<li><a href="login.html">Login</a></li>';
        }
        ?>
    </ul>
</nav>

</body>
</html>