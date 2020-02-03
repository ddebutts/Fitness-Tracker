const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.get('/stats', (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

router.get('/exercise', (req, res)=> {
    fs.readFile(path.join(__dirname, '../public/exercise.html'), 'utf8', (err, html) => {
        if(err) res.sendStatus(404)

        res.send(html)
    })
})

module.exports = router;