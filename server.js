const express = require('express')
const cors = require('cors')
const products = require('./src/components/products.json')
const app = express()

app.use(cors())
app.get('/getData',(req,res) => {
    res.send(JSON.stringify(products))
})

app.listen(8080,() => {console.log("API is running")})
