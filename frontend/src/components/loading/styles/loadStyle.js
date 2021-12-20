import styled from "styled-components"
import { globalStyle } from "../../global/globalStyle"
export const LoadingContainer = styled.div`
${globalStyle};
height:80px;
justify-content:start;
span{
    padding-left:10px;
    font-size:25px;
    font-weight:500
}


`
export const LoadingImg = styled.img`
height:80px;
width:80px;
object-fit:contain
`
