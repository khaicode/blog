const jwt = require("jsonwebtoken")
const isAuth = (req,res,next) =>{
    const authorization = req.headers.authorization
    const token = authorization.slice(7,authorization.length)
    if(token){
        jwt.verify(token,process.env.JWT_SECRET || "somethingsecret",(err,decode)=>{
            if(err) res.status(401).send({message:"Invalid token!"})
            else{
                req.user = decode
                next()
            }
        })
    }
    else{
        res.status(400).send({message:"No token!"})
    }
}
module.exports = isAuth