import express from 'express'
const app = express()
import bodyParser from 'body-parser'

const port = 3001


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send(`success`)
})

app.listen(port,()=>console.log(`listen on ${port} !!!`))
