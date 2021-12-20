import React,{useState,useEffect} from "react"
import Sidebar from "../components/sidebar/sidebar"
import { BlogContainer } from "../components/sidebar/styles/sidebarstyle"
import {Header,ProfileContainer,Title,Btn,User,UpdateContainer,ProfileHeader,ProfilePic,Img,Logo,
    FormItem,Label,Input,Button,Wrap} from "./styles/profilestyle.js"
import { useSelector,useDispatch } from "react-redux"
import { updateUser } from "./actions/useractions"
import axios from "axios"
import { updateErr } from "../utils/store"
import { Message } from "./styles/loginstyle"
import {signout,deleteUser} from "./actions/useractions"
const Profile = () =>{
    const userInfo = useSelector(state=>state.blog.userInfo)
    const [username,setUsername] = useState(userInfo?userInfo.username:'')
    const [profilePic,setProfilePic] = useState(userInfo?userInfo.profilePic:'')
    const [email,setEmail] = useState(userInfo?userInfo.email:'')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    const dispatch = useDispatch()
const submitHandler = (e) =>{
    e.preventDefault()
    dispatch(updateUser(userInfo,{username,profilePic,email,password}))
    setMessage("Profile updated successfully!")
}
const uploadFile = async(e) =>{
    e.preventDefault()
    const file = e.target.files[0]
    const bodyFormatData = new FormData()
    bodyFormatData.append("image",file)
    try{
const {data} = await axios.post('/api/upload',bodyFormatData,{
    headers:{
"Content-Type":"multiformat/formdata",
 Authorization:`Bearer ${userInfo.token}`
}
})
const pic = data.slice(24,data.length)
setProfilePic(`/images/${pic}`)
console.log(profilePic)
    }
    catch(error){
        dispatch(updateErr({errorUpdate:error.response && error.response.data.message ?error.response.data.message :error.message}))
    }
}
const errorUpdate = useSelector(state=>state.blog.errorUpdate)
const deleteHandler = () =>{
    dispatch(deleteUser(userInfo))
    dispatch(signout())
}
    return(
<>
{errorUpdate && <Message two>{errorUpdate}</Message>}
{message && <Message two>{message}</Message>}

    <BlogContainer>
        <ProfileContainer onSubmit = {submitHandler}>
            <Header>
                <Title>
                Update Your Account
                </Title>
                <Btn onClick = {deleteHandler}>Delete Account</Btn>
                </Header> 
            <UpdateContainer>
                <ProfileHeader>Profile Picture</ProfileHeader>
                <ProfilePic>
                    {userInfo.profilePic && <Img src ={profilePic} />}
                    <Wrap>
            <User /><Logo  onChange = {uploadFile}  type = "file" name = "image" />
            <Input two  value = {profilePic}   type = "text"   />
                </Wrap>
                </ProfilePic>
                <FormItem>
                    <Label>Username</Label>
                    <Input value = {username} type = "text" placeholder = "Enter your username" onChange = {(e)=>setUsername(e.target.value)} />
                </FormItem>
                <FormItem>
                    <Label>Email</Label>
                    <Input value = {email} type = "email" placeholder = "Enter your email" onChange = {(e)=>setEmail(e.target.value)} />
                </FormItem>
                <FormItem>
                    <Label>Password</Label>
                    <Input value = {password} type = "password" placeholder = "Enter your password" onChange = {(e)=>setPassword(e.target.value)} />
                </FormItem>
                <Button type = "submit">Update</Button>
            </UpdateContainer>
        </ProfileContainer>
        <Sidebar />

        </BlogContainer>
        </>
    )
}
export default Profile