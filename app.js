let express = require('express')
let app = express()
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/app.html')
})

const port = 3000
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})