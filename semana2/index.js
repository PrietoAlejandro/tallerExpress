
/*const http= require("http")
const host = 'localhost';
const port = 8000;

const requestLister=function(req,res)
{
    res.writeHead(200)
    Response.apply("Esto es un servidor");

};

const server=http.createServer(requestLister);
server.listen(port,host,()=>
{
    console.log(`Servidor conectado sobre http://${host}:${port}`)
})

const op=require('./ejercicio1')

console.log(op)

op.sumar(1,1)
op.restar(5,1)
op.multiplicar(1,2)
op.division(5,5)
op.sumar(2,7)
op.restar(5,1)
op.multiplicar(1,2)
op.division(5,5)


const http=require("http")
function handlServer(req,res)
{
    res.write('<h1>La respuesta del usuario</h1>');
    res.end();
}

const server=http.createServer(handlServer).listen(3008)*/

const express = require('express')
const app = express()
const port = 3005
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs')
    app.set('views', __dirname + '/Views')

    app.use('/', require('./router/rutasWeb'));

app.listen(port, () => 
    {
    console.log(`Example app listening on port ${port}`)
    })

      app.use((req,res,next)=>
      {
        res.status(404). sendFile(__dirname + '/public/404.html')
      });