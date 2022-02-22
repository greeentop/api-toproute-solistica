const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mssql = require('mssql') // para conectar com o banco sqlserver
const cors = require('cors')
const koa = require('koa');
const http = require('http').Server(express)
const socket = require('socket.io')(http)
require('dotenv').config();
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");


// const appp =  new koa()
// const server  =  http.createServer(appp.callback())
// const io =  socket(server)




const intergracaoLogs = require('./routes/integracaoLogs.route')
    // const fatorRouter               = require('./routes/fator')

app.use(cors());

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// app.use((req, res, next) => {
//   // console.log('sadsd')
//   //  console.log(`${new Date().toString()} => ${req.originalUrl} `, req.body)
//    console.log(`${new Date().toString()} => ${req.originalUrl} `, 'intercepitador')
//   next()
// })



app.use(function(req, res, next) {
    // console.log('request', req.url, req.body, req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
    if (req.method === 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});



app.use(intergracaoLogs)
    //  app.use(fatorRouter)
    // app.use(usuariosRoute)
    // app.use(origensRoute)
    // app.use(maps)
    // app.use(integrationRoutings)
    // app.use(veiculos)
    // app.use(directiones)
    // app.use(algoritimo)
app.use(express.static('public'))

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {

    // console.log('request', req.url,  req.method,req);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
    next();
    // if(req.method === 'OPTIONS') {
    //   res.end();
    // }
    // else {
    //   next();
    // }

})






// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err)
    res.sendFile(path.join(__dirname, '../src/public/500.html'))
})



const PORT = process.env.NODE_PORTA || 3001
app.listen(PORT, () =>
    console.info(`servidor iniciado na porta  ${PORT}`)
)