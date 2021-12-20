import React,{useState,useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { listPosts } from "./actions/postactions"
import Post from "../components/posts/post"
import { BlogContainer, SidebarItem, SidebarItems } from "../components/sidebar/styles/sidebarstyle"
import { PostC ,Pages, Page,PageS} from "../components/posts/styles/poststyle"
import LoadingBox from "../components/loading/loading"
import Sidebar from "../components/sidebar/sidebar"
const SearchScreen = () =>{
    const {pageNumber = 1,title = "all",description = "all",category= "all",user= "all"} = useParams()
    const dispatch = useDispatch()
    const result = useSelector(state=>state.blog.result)
    const resultLoad = useSelector(state=>state.blog.resultLoad)

    const pages = useSelector(state=>state.blog.pages)
    const page = useSelector(state=>state.blog.page)
    const navigate = useNavigate()
    const [cats,setCats] = useState([])
    
    useEffect(()=>{
dispatch(listPosts({
    pageNumber:pageNumber,
    title:title !== "all" ?title:"",
    description:description !== "all"?description:"",
    category:category !== "all"?category:"",
    user:user !== "all"?user:""
}))

    },[title,category,description,user,pageNumber])
    const getFilterUrl = (filter) =>{
        const filterPage = filter.page || pageNumber
        const filterTitle = filter.title || title
        const filterCate = filter.category || category
        const filterUser = filter.user || user
        const filterDesc = filter.description || description
        return `/search/title/${filterTitle}/description/${filterDesc}/category/${filterCate}/user/${filterUser}/pageNumber/${filterPage}`
    }
    console.log(cats)
    return(<>
    
        {resultLoad?<LoadingBox />:<BlogContainer >
            <PageS>
<PostC two>
    {result.map(item=>(
   <Post two item = {item} />
    ))}
    </PostC>

<Pages>
{[...Array(pages).keys()].map(x=>(
<Page key = {x+1} onClick = {()=>navigate(getFilterUrl({page:x+1}))} 
active = { x + 1 === page}>{x + 1}</Page>))}
</Pages>
</PageS>
<Sidebar />
    </BlogContainer>}
    </>
    )
}
export default SearchScreen