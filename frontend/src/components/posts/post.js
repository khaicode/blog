import React from "react"
import {PostItem,PostImg,PostTitle,PostDesc,Categories,Cate,Line} from "./styles/poststyle"
import TimeAgo from 'timeago-react'
import {useNavigate} from "react-router-dom"
const Post = ({item}) =>{
    const truncate = (str,n) => str.length > n ?str.substr(0,n-1) + "...":str
    const navigate = useNavigate()
const handleClick = () =>{
    navigate(`/post/${item._id}`)
}
return(
    <PostItem onClick = {handleClick}>
    <PostImg  src = {item.photo} />
    <Categories>
    {item.categories.map(cate=>(
        <Cate>{cate}</Cate>
    ))}
    </Categories>
    <PostTitle>{item.title}</PostTitle>
<Line>
    <TimeAgo datetime = {item.createdAt}  />
    </Line>
    <PostDesc>{truncate(item.description,250)}</PostDesc>
    </PostItem>
)
}
export default Post