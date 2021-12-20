import React,{useState} from "react"
import {Select,Option} from "../styles/postStyle"
import { Checked } from "../styles/blogg"
 const Cate = ({cat,choose,categories}) =>{
     const [cated,setCated] = useState(false)
    let clicked = false
    const addCate = () =>{
clicked = true 
if(cated)  clicked = false
const index = categories.findIndex(x=>x === cat )
if(clicked){
    categories.splice(index,0,cat)
setCated(true)
    }
else{
    categories.splice(index,1)
setCated(false)
}
   
}
    return(<>
{choose &&<Select  clicked = {cated}  onClick = {addCate}>
    <Option>{cat.charAt(0).toUpperCase() + cat.slice(1)} {cated   ?<Checked />:null}</Option>
</Select>}
</>
    )
}
export default Cate