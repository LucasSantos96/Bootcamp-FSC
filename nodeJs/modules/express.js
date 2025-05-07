// Importa o módulo 'express', que é um framework para criar servidores web de forma mais simples e eficiente.
const express = require('express')

const UserModel = require("../src/models/user.model")

// Cria uma instância do aplicativo Express.
const app = express()
app.use(express.json())

app.set('view engine' , 'ejs')
app.set('views', 'src/views')

app.use((req, res, next)=> {
    console.log(`Request Type: ${req.method}`);
    console.log(`Content Type: ${req.headers["content-type"]}`);
    console.log(`Date: ${new Date()}`)
    next()
})


app.get('/views/users',async (req, res) => {
    const users = await UserModel.find({})
    res.render('index', {users})
})
// Define uma rota GET para o caminho "/home".
// Quando o cliente acessar "/home", a função de callback será executada.
app.get("/home", (req, res) => {
    // Define o tipo de conteúdo da resposta como "application/html".
    res.contentType("application/html")
    
    // Define o status da resposta como 200 (OK) e envia um conteúdo HTML simples.
    res.status(200).send("<h1>Hello world!</h1>")
})

// Define uma rota GET para o caminho "/users".
// Quando o cliente acessar "/users", a função de callback será executada.
app.get("/users", async (req, res) => {
   try {
    const user = await UserModel.find({})

    res.status(201).json(user)
   } catch(error) {
    res.status(500).send(error.message)
   }
})

app.get("/users/:id", async (req, res) => {
    try {
     const id = req.params.id

     const user = await UserModel.findById(id)
 
     res.status(200).json(user)
    } catch(error) {
     res.status(500).send(error.message)
    }
 })

// Define a porta na qual o servidor irá escutar. Neste caso, a porta 8080.

app.post('/users', async (req, res) => {
    
    try {const user = await UserModel.create(req.body)
        
        res.status(201).json(user)
    } catch (error){
        res.status(500).send(error.message)
    }
})

app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body,{ new: true })
        res.status(200).json(user)
    }catch (error) {
        res.status(500).send(error.message)

    }
})


app.delete('/users/:id', async (req, res) => {
    
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id)
        
        res.status(201).json(user)
    } catch (error){
        res.status(500).send(error.message)
    }
})


const port = 8080

// Faz o servidor Express escutar na porta definida.
// Quando o servidor começar a escutar, será exibida uma mensagem no console indicando que ele está rodando.
app.listen(port, () => console.log(`Rodando com express na porta: ${port}!`))