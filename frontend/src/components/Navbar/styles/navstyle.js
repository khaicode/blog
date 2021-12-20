import styled,{css} from "styled-components"
import {FaInstagramSquare,FaFacebookSquare,FaPinterestSquare,FaTwitterSquare,FaSearch} from "react-icons/fa"
import {Avatar} from "@material-ui/core"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {globalStyle} from "../../global/globalStyle"
import {Link} from "react-router-dom"
const icon = css`
${globalStyle};
font-size:25px;
height:25px;
width:50px;
color:#242424;

`
export const Nav = styled.nav`
${globalStyle};
height:80px;
position:fiex;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:80px;
@media screen and (max-width:960px){
    grid-template-columns:1fr 50% 1fr
}

`
export const NavIcons = styled.div`
${globalStyle};
height:60px
`
export const Fb = styled(FaFacebookSquare)`${icon}`
export const Insta = styled(FaInstagramSquare)`${icon}` 
export const Twit = styled(FaTwitterSquare)`${icon}`
export const Pin = styled(FaPinterestSquare)`${icon}`
export const NavItems = styled.div`
${globalStyle};
display:grid;
grid-template-columns:repeat(5,1fr)


`
export const NavItem = styled(Link)`
${globalStyle};
font-size:20px;
font-weight:400;
color:#242424;


` 
export const NavInput = styled.input`
outline:none;
border:1px solid rgba(0,0,0,.25);
padding-left:10px;
height:30px;
font-size:18px;
width:250px
`
export const NavRight = styled.form`
${globalStyle};


`
export const AvatarImg = styled(Avatar)``
export const Search = styled(FaSearch)`${icon};cursor:pointer`
export const Info = styled(AiOutlineInfoCircle)`${icon};
position:absolute;
right:10px;
color:#c0c0c0`


















