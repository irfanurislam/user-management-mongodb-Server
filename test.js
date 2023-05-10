const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const users= [
    { id: 1, name: 'ladak', email: 'sabana@gmail.com' },
    { id: 2, name: 'madal', email: 'sabnoon@gmail.com' },
    { id: 3, name: 'bafak', email: 'sabila@gmail.com' },
]


app.get('/',(req,res) =>{
    res.send('test server me')
})

app.post('/users',(req,res) =>{
    console.log('api hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})
app.get('/users',(req,res) =>{
    res.send(users)
})


app.listen(port,()=>{
    console.log(`test server now ${port}`)
})
