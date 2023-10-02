const http = require('http');
const fs = require('fs');
//Importa os módulos http e fs(ler arquivos) para o servidor
const server = http.createServer((req, res) => { //createServer cria o servidor local (http:?/localhost:000.000.000.0)
    if (req.url === '/') { //Criando uma função de requisição e resposta em http
        fs.readFile('index.html', (err, data) => { //se a for solicitida0 / vai abrir o arquivo index
            if (err) {
                res.writeHead(500); //Mensagem de erro
                res.end("Erro Server"); //Mensagem de erro
            } else { //Caso tudo ok
                res.writeHead(200);
                res.end(data); //Retorna index.html
            }
        })
    } else if (req.url === "/sobre") {
        fs.readFile('sobre.html', (err, data) => { //se a for solicitida0 / vai abrir o arquivo index
            if (err) {
                res.writeHead(500); //Mensagem de erro
                res.end("Erro Server"); //Mensagem de erro
            } else { //Caso tudo ok
                res.writeHead(200);
                res.end(data); //Retorna sobre.html
            }
        })
    } else { //Erro de pagina nao encontrada
        res.writeHead(404); //Erro padrão 404
        res.end("Página não encontrada."); //Mensagem de erro
    }
});
server.listen(3000, () => { //Define a porta de conecção do servidor
    console.log("Servidor conectado na porta 3000");
});