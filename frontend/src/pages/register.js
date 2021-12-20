import React,{useState} from "react"
import {LoginContainer,LoginHeader,Message,LoginItem,LoginLabel,LoginInput,LoginBtn,LoginButton,LoginWrap} from "./styles/loginstyle"
import { register } from "./actions/useractions"
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
const Register = () =>{
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
const navigate = useNavigate()
const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(register({username,email,password},navigate))
    }
    const errorRequest = useSelector(state=>state.blog.errorRequest)

    return(<LoginWrap two>
                {errorRequest &&<Message>{errorRequest}</Message>}

<LoginButton onClick = {()=>navigate('/login')}> Login</LoginButton>
        <LoginContainer two onSubmit = {submitHandler}>
            <LoginHeader>Register</LoginHeader>
            <LoginItem>
            <LoginLabel>Username</LoginLabel>
            <LoginInput required value = {username} type = "text" onChange = {(e)=>setUsername(e.target.value)} placeholder = "Enter your username" />
            </LoginItem>
            <LoginItem>
            <LoginLabel>Email</LoginLabel>
            <LoginInput required value = {email} type = "email" onChange = {(e)=>setEmail(e.target.value)} placeholder = "Enter your email" />
            </LoginItem>
            <LoginItem>
            <LoginLabel>Password</LoginLabel>
            <LoginInput required value = {password} type = "password" onChange = {(e)=>setPassword(e.target.value)} placeholder = "Enter your password" />
            </LoginItem>
            <LoginBtn  disabled = {username === ""
             || email === "" || password === ""} type = "submit">Register</LoginBtn>
        </LoginContainer>
        </LoginWrap>
    )
}
export default Register