import axios from "axios"
import {errorPost,loadPost,postBlog,getPosts,getBlog,errorBlog,loadBlog,editE,editL,search,searchL,searchErr} from "../../utils/store"
export const post = ({username,title,description,photo},userInfo) =>async(dispatch) =>{

    const {data} = await axios.post("/api/post",{username,title,description,photo},{
        headers:{
            Authorization: `Bearer ${userInfo.token}`
        }
    })
    dispatch(postBlog({post:data}))

}
export const fetchPosts = ({search}) =>async(dispatch) =>{
    dispatch(loadPost({load:true}))
    try{
        const {data} = await axios.get(`/api/post/${search}`)
        dispatch(getPosts({posts:data.posts}))
        dispatch(loadPost({load:false}))
    
    }
    catch(error){
        dispatch(loadPost({load:false}))
    dispatch(errorPost({error:error.response && error.response.data.message?error.response.data.message:error.message}))
    }
    }
    export const fetchBlog = (id) =>async(dispatch) =>{
        dispatch(loadBlog({loadB:true}))
    try{
        const {data} = await axios.get(`/api/post/${id}`)
        dispatch(getBlog({blog:data.post}))
        dispatch(loadBlog({loadB:false}))
    
    }
    catch(error){
        dispatch(loadBlog({loadB:false}))
    dispatch(errorBlog({errorB:error.response && error.response.data.message?error.response.data.message:error.message}))
    } 
    }
    export const editPost = ({username,title,description,photo,categories},id,userInfo) =>async(dispatch)=>{
        dispatch(editL({editLoad:true}))
        try{
const {data} = await axios.put(`/api/post/${id}`,{username,title,description,photo,categories},{
    headers:{
        Authorization:`Bearer ${userInfo.token}`
    }
})
dispatch(editL({editLoad:false}))
dispatch(getBlog({blog:data}))
        }
        catch(error){
            dispatch(editL({editLoad:false}))
            dispatch(editE({editErr:error.response && error.response.data.message?error.response.data.message:error.message}))

        }
    }
    export const deletePost = ({id},userInfo) =>async(dispatch)=>{
await axios.delete(`/api/post/${id}`,{
    headers:{
        Authorization:`Bearer ${userInfo.token}`
    }
})
    }
    export const listPosts = ({pageNumber = "",title = "",description = "",category = "",user = ""}) =>async(dispatch) =>{
        dispatch(searchL({resultLoad:true}))
        try{
    const {data} = await axios.get(`/api/post/search?title=${title}&description=${description}&category=${category}&user=${user}&pageNumber=${pageNumber}`)
    dispatch(search({result:data.posts,pages:data.pages,page:data.page}))
    dispatch(searchL({resultLoad:false}))

        }
        catch(error){
            dispatch(searchL({resultLoad:false}))
            dispatch(searchErr({resultErr:error.response && error.response.data.message?error.response.data.message:error.message}))
        }
    }