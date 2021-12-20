import axios from "axios"
import  {login,errorSignin,registerError,updateLoad,updateErr} from "../../utils/store"
export const signin = ({email,password},navigate) =>async(dispatch)=>{
try{
    const {data} = await axios.post('/api/users/signin',{email,password})
    dispatch(login({userInfo:data}))
navigate('/')
}
catch(error){
  dispatch(errorSignin({errorUser:error.response && error.response.data.message ?error.response.data.message :error.message}))
}
}
export const register = ({username,email,password},navigate) =>async(dispatch)=>{
  try{
      const {data} = await axios.post('/api/users/register',{username,email,password})
      dispatch(login({userInfo:data}))
  navigate('/')
  }
  catch(error){
    dispatch(registerError({errorRequest:error.response && error.response.data.message ?error.response.data.message :error.message}))
  }
  }
  export const signout = () =>async(dispatch) =>{
    dispatch(login({userInfo:null}))
    localStorage.removeItem("userInfo")
    document.location.href = "/login"
  }
  export const updateUser = (userInfo,{username,profilePic,email,password}) =>async(dispatch) =>{
    dispatch(updateLoad({loadUpdate:true}))
    try{
      const {data} = await axios.put('/api/users/profile',{username,profilePic,email,password},{
        headers:{
          Authorization:`Bearer ${userInfo.token}`
        }
      })

      dispatch(login({userInfo:data}))
      dispatch(updateLoad({loadUpdate:false}))

    }
    catch(error){
      dispatch(updateLoad({loadUpdate:false}))
      dispatch(updateErr({errorUpdate:error.response && error.response.data.message ?error.response.data.message :error.message}))
    }
  }
  export const deleteUser = (userInfo) =>async() =>{
      await axios.delete(`/api/users/${userInfo._id}`,{
        headers:{
          Authorization:`Bearer ${userInfo.token}`
        }
      })    
  }