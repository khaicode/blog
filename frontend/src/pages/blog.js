import React,{useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {deletePost, fetchBlog} from "./actions/postactions"
import {useLocation, useNavigate} from "react-router-dom"
import { BlogContainer } from "../components/sidebar/styles/sidebarstyle"
import Sidebar from "../components/sidebar/sidebar"
import {BlogItem,ItemImg,ItemTitle,Head,User,Dates,Desc, Icons, Edit, Trash} from "./styles/blogg"
import LoadingBox from "../components/loading/loading"
const Blog = () =>{
const {pathname} = useLocation()
const blog = useSelector(state=>state.blog.blog)
const loadB = useSelector(state=>state.blog.loadB)

const id = pathname.split('/post/')[1]
const dispatch = useDispatch()
const navigate = useNavigate()
useEffect(()=>{
    dispatch(fetchBlog(id))
},[id])
const userInfo = useSelector(state=>state.blog.userInfo)
const handleDelete = () =>{
    dispatch(deletePost({id},userInfo))
}
    return(
    <>{loadB ?<LoadingBox />:
    <BlogContainer>
        <BlogItem>
            <ItemImg src = {blog.photo} />
            <Head>
                <User onClick = {()=>navigate(`/?user=${blog.username}`)}>
                    Author: {blog.username}
                </User>
                <Dates>{new Date(blog.createdAt).toDateString()}</Dates>
            </Head>
        <ItemTitle>{blog.title}    {blog.username === userInfo.username && <Icons>
                <Edit onClick = {()=>navigate(`/post/${blog._id}/edit`)} />
                <Trash onClick = {handleDelete}  /></Icons>}
                </ItemTitle>

            <Desc>{blog.description}</Desc>
            
        </BlogItem>
        <Sidebar />
        </BlogContainer>}
        </>
    )
}
export default Blog