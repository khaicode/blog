import styled,{css} from "styled-components"
import { globalStyle } from "../../components/global/globalStyle"
import {BiEdit} from "react-icons/bi"
import {BsTrash} from "react-icons/bs"
import {AiOutlineCheck} from "react-icons/ai"
const icon = css`
${globalStyle};
color:teal;
height:25px;
width:25px;

`

export const Checked = styled(AiOutlineCheck)`
justify-self:center;
height:25px;
width:25px;
align-self:center;
color:teal

`
export const EditTitle = styled.input`
font-size:25px;
padding-left:10px;
height:50px;
border:none;
border-bottom:1px solid rgba(0,0,0,.25);
outline:none;
font-weight:600
`
export const EditDesc = styled.textarea`
font-size:20px;
padding:0 0 50px 10px;
border:none;
border-bottom:1px solid rgba(0,0,0,.25);
outline:none;
line-height:30px;
overflow-wrap:anywhere;
min-height:50vh
`

export const Edit = styled(BiEdit)`${icon}`
export const Trash = styled(BsTrash)`${icon};color:#cc0000`
export const Icons = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr 1fr;
height:50px;
align-self:start

`
export const BlogItem = styled.form`
display:grid;
grid-template-columns:1fr;
padding:0 25px 0 20px
`
export const ItemImg = styled.img`
width:100%

`
export const ItemTitle = styled.div`
font-size:2rem;
text-align:center;
font-weight:500;
line-height:50px;
display:grid;
grid-template-columns:1fr 80px

`
export const Head = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr 1fr;
height:60px;
color:#e1ad01;
font-size:20px;
padding-left:${({two})=>(two && '10px')}


`
export const Dates = styled.div`
justify-self:end

`
export const Button = styled.button`
width:100%;
margin:25px 0;
background:teal;
border:none;
color:#fff;
font-size:20px;
height:50px;
border-radius:5px
`
export const Desc = styled.div`
font-size:18px;
line-height:25px;
letter-spacing:0.4px
`
export const User = styled.div`cursor:pointer`



