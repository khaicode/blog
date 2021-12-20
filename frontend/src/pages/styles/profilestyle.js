import styled from "styled-components"
import { globalStyle } from "../../components/global/globalStyle"
import {HiOutlineUserCircle} from "react-icons/hi"
export const ProfileHeader = styled.div`
font-size:18px;
align-self:center;



`
export const ProfileContainer = styled.form`
display:grid;
grid-template-columns:1fr;
grid-template-rows:80px   500px;
padding:0 10px

`
export const Title = styled.div`
color:#e75480;
font-size:20px

`
export const Btn = styled.div`
color:#e75480;
justify-self:end;
cursor:pointer


`
export const UpdateContainer = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr

`
export const Header = styled.div`
${globalStyle};
display:grid;
grid-template-columns:repeat(2,1fr);


`
export const ProfilePic = styled.div`
${globalStyle};
justify-content:start;
height:100px;
position:relative

`
export const Img = styled.img`
height:100px;
width:100px;
border-radius:5px;
object-fit:cover

`
export const Logo = styled.input`
${globalStyle};
line-height:100px;
opacity:0;
position:absolute
`
export const Wrap = styled.div`
${globalStyle};
justify-content:start

`
export const User = styled(HiOutlineUserCircle)`
height:40px;
width:40px;
padding:5px;
color:#fff;
margin-left:10px;
position:relative;
z-index:-1;
background:#e75480;
border-radius:50%;

`
export const FormItem = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr

`
export const Label = styled.label`
align-self:center;
font-size:18px

`
export const Input = styled.input`
height:${({two})=>(two?'50px':'')};
border:none;
border-bottom:${({two})=>(!two?'1px solid rgba(0,0,0,.25)':'')};
font-size:18px;
padding-left:${({two})=>(two && '10px')};
outline:none;
&:focus{
    border-bottom:1px solid teal;
};
transition:all 0.1s ease-in-out

`
export const Button = styled.button`
${globalStyle};
height:45px;
width:120px;
background:teal;
border:none;
margin:0 auto;
border-radius:5px;
color:#fff;
font-size:18px;
cursor:pointer
`
