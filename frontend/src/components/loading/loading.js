import React from "react"
import {LoadingContainer,LoadingImg} from  "./styles/loadStyle"
const LoadingBox = () =>{
    return(
        <LoadingContainer>
            <LoadingImg src = "/images/loading.gif" />
            <span>Loading...</span>
        </LoadingContainer>
    )
}
export default LoadingBox
