<?php
session_start();
session_destroy();
header("Location: index.html"); // Redireciona para a página inicial após o logout
exit();
?>