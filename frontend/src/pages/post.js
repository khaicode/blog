import React,{useState,useEffect} from "react"
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import {PostContainer,PostTitle,Input,AddImg,Btn,PostDesc,PostImg,Line,InputField} from "./styles/postStyle"
import {post} from "./actions/postactions"
import { Message } from "./styles/loginstyle"
import { useNavigate } from "react-router-dom"
import Cate from "./data/cate"
import {Select,Option,SelectItem,Header,Down} from "./styles/postStyle"
import { data } from "./data/categories"
const Post = () =>{
    const [photo,setPhoto] = useState('')
    const [title,setTitle] = useState('')
    const [success,setSuccess] = useState('')
    const [description,setDescription] = useState('')
    const [click,setClick] = useState(false)
    const [category,setCategory] = useState("")
    const [choose,setChoose] = useState(false)
    const categories = []
    const dispatch = useDispatch()
    const userInfo = useSelector(state=>state.blog.userInfo)
const navigate = useNavigate()
const uploadFile = async(e) =>{
    const file = e.target.files[0]
    const bodyFormData = new FormData()
    bodyFormData.append("image",file)
    const {data} = await axios.post('/api/upload',bodyFormData,{
headers:{
    "Content-Type":"multiformat/formdata",
    Authorization:`Bearer ${userInfo.token}`
}
    })
    setPhoto(`/images/${data.slice(24,data.length)}`)
}
const submitHandler = (e) =>{
    e.preventDefault()
dispatch(post({
    username:userInfo.username,
    title,
    description,
    photo
},userInfo))
setSuccess("Your story has been posted successfully!")
if(category) categories.push(category)

}

useEffect(()=>{
  if(!userInfo) navigate("/login")
},[])

    return(<>
    {success && <Message two >{success}</Message>}
        <PostContainer onSubmit = {submitHandler}>
            <PostImg src = {photo}  />

            <PostTitle>
                <Line>
<Input two type = "file" name = "image" onChange = {uploadFile} />
<AddImg  />
</Line>
<Input value = {title} onChange = {(e)=>setTitle(e.target.value)} type = "text" placeholder = "Title" />
<Btn type = "submit">Publish</Btn>

            </PostTitle>

            <PostDesc onChange = {(e)=>setDescription(e.target.value)} value = {description}
                placeholder = "Tell your story..." >
            </PostDesc>
            <SelectItem>
                <Header onClick = {()=>setChoose(!choose)}>Choose Category: </Header>
                <div>
            {data.map(cat=>(
                <Cate cat = {cat} click = {click} choose = {choose} categories = {categories} />
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
        </PostContainer>
        </>
    )
}
export default Post