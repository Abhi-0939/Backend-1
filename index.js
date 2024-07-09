require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
  res.send('Abhi-ssss')
})

app.get('/login',(req,res) => {
    res.send('<h1>username: Abhi_0938</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<a href="https://www.youtube.com/watch?v=7fjOw8ApZ1I">Click me !</a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})