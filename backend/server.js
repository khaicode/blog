const dotenv = require('dotenv')
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const userRouter = require("./routers/userRouter")
const uploadRouter = require("./routers/uploadRouter")
const postRouter = require("./routers/postRouter")

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost/blog')
app.use('/api/users',userRouter)
app.use('/api/upload',uploadRouter)
app.use('/api/post',postRouter)

app.get('/',(req,res)=>{
    res.send('Server is ready!')
})
const port = process.env.PORT || 7000
app.listen(port,()=>{
    console.log(`Server is up and running at http://127.0.0.1:${port}`)
})