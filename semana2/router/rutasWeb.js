const express = require('express');
const router = express.Router();

    router.get('/', (req, res) => 
        {
            res.render('index')
        })

    router.get('/habilidades', (req, res) => 
        {
            res.render('habilidades')
        })

    router.get('/acerca', (req, res) => 
        {
            res.render('acercaDe')
        })
    module.exports = router;