//const {Person} = require("./person")

const dotenv = require('dotenv')

const connectToDatabase = require('./src/database/connect')

dotenv.config() //PERMITE USAR AS VARIAS DE USUARIO E SENHA SALVAS NA .ENV

connectToDatabase()


require("./modules/express")


//require("./modules/path")
//require('./modules/fs')

//require("./modules/http")
//const person = new Person("Lucas!",28)


