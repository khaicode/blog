import {useEffect} from "react"
import Hero from "../components/hero/hero"
import Sidebar from "../components/sidebar/sidebar"
import {BlogContainer} from "../components/sidebar/styles/sidebarstyle"
import Posts from "../components/posts/posts"
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
const Home = () =>{
    const userInfo = useSelector(state=>state.blog.userInfo)
    const navigate = useNavigate()
    useEffect(()=>{
      if(!userInfo) navigate("/login")
    },[])
    return(
        <>
   <Hero />
        <BlogContainer>
            <Posts />
    <Sidebar />
        </BlogContainer>
        </>
    )
}
export default Home