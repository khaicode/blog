import { Link } from "react-router-dom"
import styled from "styled-components"
import { globalStyle } from "../../global/globalStyle"
export const SidebarContainer = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr;
width:100%;
padding:0 10px;
grid-template-rows:80px 1fr;
max-height:800px;
align-self:start


`
export const SidebarHeader = styled.div`
${globalStyle};
height:40px;
border-bottom:1px solid rgba(0,0,0,.5);
border-top:1px solid rgba(0,0,0,.5);
font-weight:600


`
export const SidebarImg = styled.img`
width:100%

`
export const SidebarDesc = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr;
grid-template-rows:60px 1fr;

`
export const Header = styled.div`
font-weight:600

`
export const Description = styled.div`
font-size:16px;
line-height:22px;
padding-bottom:10px

`
export const BlogContainer = styled.div`
display:grid;
grid-template-columns:1fr 20vw;
@media screen and (max-width:960px){
    grid-template-columns:1fr 250px
}


`
export const SidebarItems = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr 1fr;
padding:20px 0px;
background:${({two})=>(two && "red")};
width:${({two})=>(two && "20vw")};
position:relative;
z-index:100;
height:${({two})=>(two && "200px")}
`
export const SidebarItem = styled(Link)`
${globalStyle};
height:30px;
justify-content:start;
cursor:pointer;
color:#242424;
&:hover{
    color:#e1ad01;
};
transition:all 0.5s ease-in-out

`