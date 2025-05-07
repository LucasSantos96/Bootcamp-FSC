// Importa o módulo 'http' do Node.js, que permite criar servidores HTTP.
const http = require('http')

// Define a porta na qual o servidor irá escutar. Neste caso, a porta 8080.
const port = 8080

// Cria um servidor HTTP utilizando o método 'createServer'.
// Este método recebe uma função de callback que será executada a cada requisição recebida pelo servidor.
const server = http.createServer((req, res) => {
    // Verifica se a URL da requisição é "/home".
    if (req.url === "/home") {
        // Define o cabeçalho da resposta HTTP com o status 200 (OK) e o tipo de conteúdo como "text/html".
        res.writeHead(200, { "Content-Type": "text/html" })
        
        // Envia a resposta ao cliente com o conteúdo HTML "<h1>Home Page</>".
        // OBS: Há um erro no fechamento da tag HTML. O correto seria "</h1>".
        res.end("<h1>Home Page</h1>")
    }
    if (req.url === '/users') { 
        const users = [
            {
                name: "John Doe",
                email: "johndoe@gmail.com",
            },
            {
                name: "Jane Doe",
                email: "janedoe@gmail.com",
            },
        ];

        // Corrige o tipo de conteúdo para "application/json".
        res.writeHead(200, { "Content-Type": "application/json" });

        // Envia a resposta ao cliente com os dados dos usuários em formato JSON.
        res.end(JSON.stringify(users));
    }
})

// Faz o servidor escutar na porta definida anteriormente (8080).
// Quando o servidor começar a escutar, será exibida uma mensagem no console indicando que ele está rodando.
server.listen(port, () => console.log(`Rodando na porta ${port}!`))