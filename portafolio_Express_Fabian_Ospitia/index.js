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