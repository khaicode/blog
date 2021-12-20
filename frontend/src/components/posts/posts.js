import React,{useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {fetchPosts} from "../../pages/actions/postactions"
import Post from "./post"
import { useLocation } from "react-router-dom"
import {PostC} from "./styles/poststyle"
import LoadingBox from "../loading/loading"
const Posts = () =>{
    const post = useSelector(state=>state.blog.post)
    const posts = useSelector(state=>state.blog.posts)
    const load = useSelector(state=>state.blog.load)

    const dispatch = useDispatch()
    const {search} = useLocation()
    useEffect(()=>{
dispatch(fetchPosts({
   search
}))
    },[post,search])
    
    return(<>
        {load?<LoadingBox />:<PostC>
    {posts.map(item=>(
   <Post item = {item} />
    ))}
</PostC>}
</>
    )
}
export default Posts