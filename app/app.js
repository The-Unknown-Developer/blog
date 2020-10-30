const express = require('express')
const app = express()
const router = require('./routes.js')
app.set('view engine', 'ejs')
app.use(express.static('public'))





app.listen(3000, () => {
    console.log(` server started`)
  })