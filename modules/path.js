const path = require('path')

//apenas o nome do arquivo atual
console.log(path.basename(__filename))

//Nome do diretótio atual

console.log(path.dirname(__filename))

//Extensão do arquivo
console.log(path.extname(__filename))

//Criar um objeto path
console.log(path.parse(__filename))

//Junta vários caminhos de arquivo, cria novas pastas e arquivos dentro do diretótio que está sendo chamado separando por vírgulas
console.log(path.join(__dirname, "teste", "paginaadicionadaporconsolelog","teste.html"))

