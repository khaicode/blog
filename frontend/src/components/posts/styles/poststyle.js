import styled from "styled-components"
import {globalStyle} from "../../global/globalStyle"
export const PostC = styled.div`
${globalStyle};
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:10px;
padding:25px;
align-items:start;
@media screen and (max-width:960px){
grid-template-columns:1fr 1fr

}
`
export const PostItem = styled.div`
border-radius:5px;
overflow:hidden;
`
export const PostImg = styled.img`
width:100%;
object-fit:cover;
height:400px;
@media screen and (max-width:960px){
    height:200px
}

`
export const PageS = styled.div`


`
export const PostTitle = styled.div`
line-height:30px;
font-size:25px;
font-weight:600
`
export const Line = styled.div`
${globalStyle};
font-size:18px;
height:50px;
color:#c0c0c0
`
export const PostDesc = styled.div`
line-height:22px;
letter-spacing:0.2px;
font-weight:400

`
export const Categories = styled.div`
${globalStyle};
height:40px;
font-size:16px;
color:#e1ad01;

`
export const Cate = styled.div`
padding: 0 10px
`
export const Pages = styled.div`
margin:0 auto;
display:flex;
width:100%;
justify-content:center

`
export const Page = styled.div`
${globalStyle};
width:50px;
height:50px;
border:1px solid rgba(0,0,0,.25);
font-size:20px;
border-radius:2.5px;
background:rgba(0,0,0,.05);
cursor:pointer;
font-weight:500;
margin-left:5px;
color:${({active})=>(active && "#e1ad01")};
border-color:${({active})=>(active && "#e1ad01")}

`