import React,{useState,useEffect} from "react"
import { NavIcons,Insta,Fb,Pin,Twit } from "../Navbar/styles/navstyle"
import axios from "axios"
import {SidebarContainer,SidebarHeader,SidebarImg,SidebarDesc,Header,Description,SidebarItems,SidebarItem} from "./styles/sidebarstyle"
const Sidebar = () =>{
const [cats,setCats] = useState([])
    useEffect(()=>{
        const getCats = async() =>{
            const {data} = await axios.get("/api/post/categories")
           setCats(data.categories)
        }
        getCats()
            },[])
    return(<>
        <SidebarContainer>
            <SidebarHeader>ABOUT ME</SidebarHeader>
            <SidebarImg src = "/images/blog.jpg" />
            <SidebarDesc>
            <Header>MY EXPERIENCE</Header> 
            <Description>
                I am a job search and employment expert with many years of experience in human resources, career development and with a focus on online job searching,social media,professional networking and employment trends and technologies and employers
            </Description>
            </SidebarDesc>
            <SidebarHeader>CATEGORIES</SidebarHeader>
            <SidebarItems>
               {cats.map(cat=>(
                   <SidebarItem to = {`/?category=${cat}`} >{cat}</SidebarItem>
               ))}
            </SidebarItems>
            <SidebarHeader>FOLLOW US</SidebarHeader>
            <NavIcons>
                <Fb  />
                <Insta />
                <Pin />
                <Twit />
            </NavIcons>
        </SidebarContainer>
        </>
    )
}
export default Sidebar