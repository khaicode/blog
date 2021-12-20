import {createSlice} from "@reduxjs/toolkit"
const blogSlice = createSlice({
    name:'blog',
    initialState:{
userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null,
errorUser:'',
errorRequest:'',
errorUpdate:'',
loadUpdate:false,
post:localStorage.getItem("post")?JSON.parse(localStorage.getItem("post")):null,
load:false,
error:'',
posts:localStorage.getItem("posts")?JSON.parse(localStorage.getItem("posts")):null,
blog:localStorage.getItem("blog")?JSON.parse(localStorage.getItem("blog")):null,
loadB:false,
errorB:'',
editErr:'',
editLoad:false,
result:[],
resultLoad:false,
resultErr:'',
pages:'',
page:'',
    },
    reducers:{
    login:(state,action) =>{
        localStorage.setItem('userInfo',JSON.stringify(action.payload.userInfo))
        return {...state,userInfo:action.payload.userInfo}
    },
    postBlog:(state,action) =>{
        localStorage.setItem('post',JSON.stringify(action.payload.post))
        return {...state,post:action.payload.post}
    },
    getPosts:(state,action) =>{
        localStorage.setItem('posts',JSON.stringify(action.payload.posts))
        return {...state,posts:action.payload.posts}
    },
    errorSignin:(state,action)=>({...state,errorUser:action.payload.errorUser}),
    registerError:(state,action)=>({...state,errorRequest:action.payload.errorRequest}),
   updateLoad:(state,action) =>({...state,loadUpdate:action.payload.loadUpdate}),
updateErr:(state,action) =>({...state,errorUpdate:action.payload.errorUpdate}),
loadPost:(state,action) =>({...state,load:action.payload.load}),
errorPost:(state,action) =>({...state,error:action.payload.error}),
getBlog:(state,action) =>{
    localStorage.setItem('blog',JSON.stringify(action.payload.blog))
    return {...state,blog:action.payload.blog}
},
loadBlog:(state,action) =>({...state,loadB:action.payload.loadB}),
errorBlog:(state,action) =>({...state,errorB:action.payload.errorB}),
editE:(state,action) =>({...state,editErr:action.payload.editErr}),
editL:(state,action) =>({...state,editLoad:action.payload.editLoad}),
search:(state,action) =>({...state,result:action.payload.result,pages:action.payload.pages,page:action.payload.page}),
searchL:(state,action) =>({...state,resultLoad:action.payload.resultLoad}),
searchErr:(state,action) =>({...state,resultErr:action.payload.resultErr}),
    }
})
export const {login,errorSignin,registerError,updateLoad,
    updateErr,errorPost,loadPost,getBlog,errorBlog,loadBlog,
    postBlog,getPosts,editE,editL,search,searchL,searchErr} = blogSlice.actions
export default blogSlice.reducer