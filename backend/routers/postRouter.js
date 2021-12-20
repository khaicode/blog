const express = require("express")
const expressAsyncHandler = require("express-async-handler")
const isAuth = require("../authentication/auth")
const Post = require("../models/postModel")
const postRouter = express.Router()
postRouter.post('/',isAuth,expressAsyncHandler(async(req,res)=>{
const post = new Post(req.body)
const newPost = await post.save()
res.status(201).send({message:"New post created!",newPost})
}))
postRouter.get("/categories",expressAsyncHandler(async(req,res)=>{
    const categories = await Post.find().distinct("categories")
    res.status(200).send({categories})
}))
postRouter.get('/search',expressAsyncHandler(async(req,res)=>{
    const pageSize = 3
    const page = Number(req.query.pageNumber) || 1
    const title = req.query.title || ""
    const description = req.query.description || ""
    const category = req.query.category || ""
    const user = req.query.user || ""
    const titleFilter = title?{title} : {}
    const descFilter = description?{description} : {}
    const cateFilter = category?{categories:{$in:category}} : {}
    const userFilter = user?{user} :{}
const count = await Post.count({
    ...titleFilter,
    ...descFilter,
    ...cateFilter,
    ...userFilter
})
const posts = await Post.find({
    ...titleFilter,
    ...descFilter,
    ...cateFilter,
    ...userFilter 
})
.limit(pageSize)
.skip(pageSize*(page - 1))
res.status(200).send({posts,pages:Math.ceil(count/pageSize),page})
}))
postRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const username = req.query.user
    const category = req.query.category
    let posts
    if(username) posts = await Post.find({username})
    else if(category) posts = await Post.find({categories:{$in:[category]}})
    else posts = await Post.find({})
    res.status(200).send({posts})
}))
postRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if(post) res.status(200).send({post})
    else res.status(404).send({message:'Post not found!'})
}))
postRouter.put('/:id',isAuth,expressAsyncHandler(async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if(post.username === req.user.username){
    post.title = req.body.title || post.title
    post.description = req.body.description || post.description
    post.photo = req.body.photo || post.photo
    post.categories = req.body.categories || post.categories
    const updatedPost = await post.save()
        if(updatedPost){
            res.status(200).send({message:'post updated!',updatedPost})
        }
        else res.status(404).send({message:"Post not found!"})
    }  
    else{
        res.status(400).send({message:"You can only update your post!"})
  
    }
}))

postRouter.delete("/:id",isAuth,expressAsyncHandler(async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if(post.username === req.user.username){
await Post.findByIdAndDelete(req.params.id)
    if(post)   res.status(200).send({message:'post deleted!'})
    else res.status(404).send({message:"Post not found!"})

    }
    else res.status(400).send({message:"You can only delete your post!"})

}))

module.exports = postRouter