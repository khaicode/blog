import styled from "styled-components"
import { globalStyle } from "../../components/global/globalStyle"
export const LoginContainer = styled.form`
${globalStyle};
display:grid;
height:${({two})=>(two?'500px':'400px')};
grid-template-columns:1fr;
width:300px
`
export const LoginHeader = styled.div`
${globalStyle};
font-size:2rem;

`
export const LoginItem = styled.div`
${globalStyle};
display:grid;
grid-template-columns:1fr
`
export const LoginLabel = styled.div`
align-self:center;
font-size:18px

`
export const LoginInput = styled.input`
height:50px;
border-radius:5px;
border:none;
padding-left:10px;
font-size:18px;
outline:none;
&:focus{
    border:1px solid teal;
}
;
transition:all 0.1s ease-in-out;
letter-spacing:0.5px;
color:#242424;
background:#fff
`
export const LoginBtn = styled.button`
height:50px;
border-radius:5px;
background:#ffb6c1;
border:none;
color:#fff;
font-size:18px;
letter-spacing:0.5px;
font-weight:500;
cursor:pointer;
opacity:${({disabled})=>(disabled && "0.75")}

`
export const LoginButton = styled.button`
font-size:18px;
background:teal;
color:#fff;
border-radius:5px;
cursor:pointer;
position:absolute;
top:90px;
right:25px;
height:45px;
width:100px;
border:none


`
export const LoginWrap = styled.div`
${globalStyle};
background-image:${({two})=>(!two?`url('https://images.creativemarket.com/0.1.0/ps/4425285/1820/1213/m1/fpnw/wm1/vik7fgnk6iwb50vfgssyyfa7poutctycxhyvnqgbzrjtqwhesbczznkbqctjidpx-.jpg?1525851628&s=e87b83a22fea6d9766b62ee6af9cc721')`:
`url('https://media.istockphoto.com/photos/view-from-above-of-home-office-desk-with-laptop-flowers-and-leaves-on-picture-id1030888824?b=1&k=20&m=1030888824&s=170667a&w=0&h=PdSVMCNoVesDaB53lOtkq8Vkjq7wgrSzRaKY0ElbL3Q=')`)};
height:calc(100vh - 80px);
background-repeat:no-repeat;
background-size:cover;
flex-flow:column

`
export const Message = styled.div`
width:${({two})=>(two?'100%':'300px')};
background:${({two})=>(two?'#4BB543':'#ffcccc')};
color:${({two})=>(two?'#fff':'#cc0000')};
font-size:18px;
padding:15px 10px;
text-align:center;
border-radius:10px;

`