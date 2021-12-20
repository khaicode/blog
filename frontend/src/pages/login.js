import React,{useState} from "react"
import {LoginContainer,LoginHeader,LoginItem,LoginLabel,LoginInput,
    LoginBtn,LoginButton,LoginWrap,Message} from "./styles/loginstyle"
import { signin } from "./actions/useractions"
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
const Login = () =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
const navigate = useNavigate()
const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(signin({email,password},navigate))
    }
    const errorUser = useSelector(state=>state.blog.errorUser)
    return(
    <LoginWrap>
        {errorUser &&<Message>{errorUser}</Message>}

<LoginButton onClick = {()=>navigate('/register')}> Register</LoginButton>
        <LoginContainer onSubmit = {submitHandler}>
            <LoginHeader>Login</LoginHeader>
            <LoginItem>
            <LoginLabel>Email</LoginLabel>
            <LoginInput required value = {email} type = "email" onChange = {(e)=>setEmail(e.target.value)} placeholder = "Enter your email" />
            </LoginItem>
            <LoginItem>
            <LoginLabel>Password</LoginLabel>
            <LoginInput required value = {password} type = "password" onChange = {(e)=>setPassword(e.target.value)} placeholder = "Enter your password" />
            </LoginItem>
            <LoginBtn disabled = {email === "" || password === ""} type = "submit">Login</LoginBtn>
        </LoginContainer>
        </LoginWrap>
    )
}
export default Login