const multer = require("multer")
const express = require("express")
const isAuth = require("../authentication/auth")
const uploadRouter = express.Router()
const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,`./frontend/public/images`)
    },
   filename(req,file,cb){
       cb(null,`${Date.now()}.jpg`)
   }
})
const upload = multer({storage})
uploadRouter.post('/',upload.single("image"),isAuth,(req,res)=>{
    res.send(`/${req.file.path}`)
})
module.exports = uploadRouter