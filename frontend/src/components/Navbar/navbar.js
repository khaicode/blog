import React, { useState } from "react"
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { signout } from "../../pages/actions/useractions"
import {Nav,NavIcons,NavItems,NavItem,NavRight,AvatarImg,Search,Fb,Insta,Pin,Twit,Info,NavInput} from "./styles/navstyle"
const Navbar = () =>{
    const [search,setSearch] = useState(false)
    const [title,setTitle] = useState("")
    const userInfo = useSelector(state=>state.blog.userInfo)
    const dispatch = useDispatch()
    const ToLogin = () =>{
        dispatch(signout())
    }
    const navigate = useNavigate()
    return(
        <Nav>
            <NavIcons>
                <Fb  />
                <Insta />
                <Pin />
                <Twit />
            </NavIcons>
            <NavItems>
                <NavItem to ="/">HOME</NavItem>
                <NavItem to = "/">ABOUT</NavItem>
                <NavItem to = "/">CONTACT</NavItem>
                <NavItem to = "/write">WRITE</NavItem>
                <NavItem onClick = {ToLogin} to = "/login">{userInfo?'LOGOUT':'LOGIN'}</NavItem>
            </NavItems>
            <NavRight onSubmit = {()=>navigate(`/search/title/${title}`)}>
                <AvatarImg onClick = {()=>navigate('/profile')} src = {userInfo ?userInfo.profilePic:null} />
                <Search onClick = {()=>setSearch(!search)} />
                {search && <NavInput value = {title} onChange = {(e)=>setTitle(e.target.value)} type = "text" plaecholder = "Search for posts" />}
                <Info />
            </NavRight>
        </Nav>
    )
}
export default Navbar