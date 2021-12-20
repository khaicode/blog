import styled from "styled-components"
import {AiOutlinePlus} from "react-icons/ai"
import {globalStyle} from "../../components/global/globalStyle"
import {BsChevronDown} from "react-icons/bs"
export const PostContainer = styled.form`
${globalStyle};
display:grid;
grid-template-columns:1fr;
align-self:start;
width:75%;
margin:0 auto



`
export const PostTitle = styled.div`
${globalStyle};
font-size:20px;
display:grid;
grid-template-columns: 50px 1fr 150px;
overflow-wrap:anywhere;
flex-wrap:wrap
`
export const Input = styled.input`
height:50px;
border:none;
outline:none;
border-bottom:1px solid rgba(0,0,0,.25);
font-size:20px;
position:${({two})=>(two?'absolute':'')};
opacity:${({two})=>(two?'0':'')};
width:${({two})=>(two?'50px':'')};

padding-left:10px

`
export const AddImg = styled(AiOutlinePlus)`
border-radius:50px;
border:1px solid rgba(0,0,0,.5);
height:40px;
width:40px;
padding:5px

`
export const Btn = styled.button`
height:50px;
background:teal;
border:none;
color:#fff;
border-radius:5px;
cursor:pointer;
font-size:20px;
width:120px;
justify-self:end

`
export const PostDesc = styled.textarea`
font-size:18px;
font-weight:400;
border:none;
padding-left:10px;
line-height:30px;
outline:none;
overflow-wrap:anywhere;
letter-spacing:0.35px



`
export const PostImg= styled.img`
width:100%;
object-fit:cover;
borrder-radius:10px

`
export const Line= styled.div`
position:relative;
${globalStyle};
justify-content:${({two})=>(two?"start":"center")};
height:${({two})=>(two?"60px":"")};
 color:teal;
 span{
     color:#242424;
     font-size:20px;
     padding-left:10px
 }

`
export const Select = styled.div`
${globalStyle};
flex-flow:column;
-webkit-appearance:none;
height:${({choose})=>(choose?'350px':'50px')};
font-size:18px;
font-weight:400;
outline:none;
width:100%;
cursor:pointer;
border-bottom:1px solid rgba(0,0,0,.25);
border-left:1px solid rgba(0,0,0,.25);
border-right:1px solid rgba(0,0,0,.25);
&:nth-child(1){
    border-top:1px solid rgba(0,0,0,.25);

};
color:${({clicked})=>(clicked && "teal")};
font-weight:500;
background:${({clicked})=>(clicked ?"#ffe6ee":"#fff")};

`
export const Option = styled.div`
${globalStyle};
height:50px;
justify-content:start;
padding-left:10px;
display:grid;
grid-template-columns:1fr 50px;

`
export const SelectItem = styled.div`
${globalStyle};
display:grid;
grid-template-columns:200px 1fr;
padding:${({two})=>(two?'25px 0 0 10px':"0 0 0 10px")};
align-items:start;


`
export const Header = styled.div`
${globalStyle};
align-self:start;
font-size:20px;
height:50px;
cursor:pointer;
justify-content:start

`
export const Down = styled(BsChevronDown)`
justify-self:center;
align-self:center;
height:25px

`
export const InputField = styled.input`
height:50px;
width:100%;
border:1px solid rgba(0,0,0,.25);
border-top:none;
outline:none;
font-size:20px;
padding-left:10px;
font-weight:500;
line-height:25px;
&::placeholder{
    font-weight:400;
    color:#c0c0c0
}

`
