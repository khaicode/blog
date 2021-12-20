const isAuth = require('../authentication/auth')
const generateToken = require('../authentication/token')
const users = require('../data/users')
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const express = require("express")
const expressAsyncHandler = require("express-async-handler")
const userRouter = express.Router()
userRouter.get('/',expressAsyncHandler(async(req,res)=>{
const createdUsers = await User.insertMany(users)
res.status(200).send({message:"User created!",createdUsers})
}))
userRouter.post('/signin',expressAsyncHandler(async(req,res)=>{
const user = await User.findOne({email:req.body.email})
if(user){
    if(bcrypt.compareSync(req.body.password,user.password)){
    res.send({
        _id:user._id,
        email:user.email,
        username:user.username,
        isAdmin:user.isAdmin,
        profilePic:user.profilePic,
        token:generateToken(user)
    })
}
}
res.status(401).send({message:"Invalid email or password!"})
}))
userRouter.post('/register',expressAsyncHandler(async(req,res)=>{
    const user = new User({email:req.body.email,username:req.body.username,password:bcrypt.hashSync(req.body.password,8),profilePic:req.body.profilePic})
    const createdUser = await user.save()   
    if(createdUser){
        res.send({
            _id:createdUser._id,
            email:createdUser.email,
            username:createdUser.username,
            isAdmin:createdUser.isAdmin,
            profilePic:createdUser.profilePic,
            token:generateToken(createdUser)
        })
    }
}))
userRouter.put('/profile',isAuth,expressAsyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id)
    if(user){
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email
        user.profilePic = req.body.profilePic || user.profilePic
        user.password = bcrypt.hashSync(req.body.password,8) || bcrypt.hashSync(user.password,8)

    }
    const updatedUser = await user.save()
    if(updatedUser) res.status(200).send({
        _id:updatedUser._id,
        email:updatedUser.email,
            username:updatedUser.username,
            isAdmin:updatedUser.isAdmin,
            profilePic:updatedUser.profilePic,
            token:generateToken(updatedUser)
    })
    else res.status(404).send({message:"User not found!"})
}))
userRouter.delete('/:id',isAuth,expressAsyncHandler(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
res.status(200).send({message:"User deleted!"})
}))
module.exports = userRouter