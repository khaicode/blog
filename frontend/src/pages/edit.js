import React,{useState,useEffect} from "react"
import { useSelector } from "react-redux"
import {Select,Option,SelectItem,Header,Down} from "./styles/postStyle"
import {BlogItem,ItemImg,EditTitle,Head,User,Dates,EditDesc,Button,Checked} from "./styles/blogg"
import { BlogContainer } from "../components/sidebar/styles/sidebarstyle"
import Sidebar from "../components/sidebar/sidebar"
import {data} from "./data/categories"
import { useDispatch } from "react-redux"
import { Line,Input,AddImg,InputField } from "./styles/postStyle"
import axios from "axios"
import { editPost } from "./actions/postactions"
import { Message } from "./styles/loginstyle"
import {useLocation, useNavigate} from "react-router-dom"
import Cate from "./data/cate"
const Edit = () =>{
    const blog = useSelector(state=>state.blog.blog)
    const userInfo = useSelector(state=>state.blog.userInfo)
    const [photo,setPhoto] = useState(blog?blog.photo:"")
    const [title,setTitle] = useState(blog.title?blog.title:"")
    const [click,setClick] = useState(false)
    const [message,setMessage] = useState('')
    const navigate = useNavigate()
    const {pathname} = useLocation()
const id =  pathname.slice(6,pathname.length - 5)
    const [category,setCategory] = useState("")
    const [description,setDescription] = useState(blog.description?blog.description:"")
    const [choose,setChoose] = useState(false)
let categories = []

const dispatch = useDispatch()
const editErr = useSelector(state=>state.blog.editErr)
const uploadFile = async(e) =>{
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image",file)
    const {data} = await axios.post('/api/upload',formData,{
        headers:{
            "Content-Type":"multiformat/formdata",
          Authorization:`Bearer ${userInfo.token}`
        }
    })
    setPhoto(`/images/${data.slice(24,data.length)}`)
}
const submitHandler = (e) =>{

   if(category !== "") categories.push(category)

   e.preventDefault()
    dispatch(editPost({
        username:userInfo.username,
       title,description,photo,categories
    },id,userInfo))
    if(!editErr) setMessage("Post updated successfully!")

}

    return(<>
    {message && <Message two>{message}</Message>}
    {editErr && <Message>{editErr}</Message>}
        <BlogContainer>
        <BlogItem onSubmit = {submitHandler}>
            <ItemImg src = {photo} />
            <Line two>
<Input two onChange = {uploadFile} type = "file" name = "image"  />
<AddImg  />
<span>{photo}</span>
</Line>
            <EditTitle placeholder = "Enter title" value = {title} onChange = {(e)=>setTitle(e.target.value)} />
            <Head two>
                <User>
                    Author: {blog.username}
                </User>
                <Dates>{new Date(blog.createdAt).toDateString()}</Dates>
            </Head>
            <EditDesc placeholder = "Enter description" value = {description} onChange = {(e)=>setDescription(e.target.value)} />
            <SelectItem two>
                <Header onClick = {()=>setChoose(!choose)}>Choose Category: </Header>
                <div>
            {data.map(cat=>(
                <Cate cat = {cat} choose = {choose} categories = {categories}
                 />
            ))}
            {!choose && <Select two onClick = {()=>setChoose(!choose)}>
    <Option>Categories <Down /></Option>
</Select>}
{choose && <Select onClick = {()=>setClick(true)} >
    <Option>Others </Option>
</Select>}
{click&& <InputField placeholder = "Enter category" type = "text" value = {category} onChange = {(e)=>setCategory(e.target.value)} />}
</div>
            </SelectItem>
            <Button type = "submit">Update</Button>
        </BlogItem>
        <Sidebar />
        </BlogContainer>
        </>
    )
}
export default Edit