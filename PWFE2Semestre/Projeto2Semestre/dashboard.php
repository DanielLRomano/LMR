<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Meta tags e links para estilos e scripts -->
    <!-- ... (mantenha os mesmos links que você já tem) -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
      // Use jQuery para carregar o cabeçalho em todas as páginas
      $(function () {
        $("#header").load("header.html");
      });

      // Função para redirecionar para a página index após 3 segundos
      function redirecionarParaIndex() {
        setTimeout(function() {
          window.location.href = "http://localhost/MegaPetMartz/index.html";
        }, 3000); // 3000 milissegundos = 3 segundos
      }

      // Chama a função para redirecionamento quando a página carregar
      $(document).ready(function() {
        redirecionarParaIndex();
      });
    </script>
</head>

<body>
    <h1>Login feito com sucesso!</h1>
    <!-- Adicione mais conteúdo conforme necessário -->
    <!-- ... -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>