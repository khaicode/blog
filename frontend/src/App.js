import GlobalStyle from "./components/global/global"
import ScrollToTop from "./components/global/scroll"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import Navbar from "./components/Navbar/navbar"
import Profile from "./pages/profile"
import Post from "./pages/post"
import Blog from "./pages/blog"
import Edit from "./pages/edit"
import SearchScreen from "./pages/searchScreen"
function App() {
 
  return (
    <Router>
      <Navbar />
    <GlobalStyle />
<ScrollToTop />
<Routes>
<Route element = {<Home />} exact path = "/" />
<Route element = {<Login />} path = "/login" />
<Route element = {<Register />} path = "/register" />
<Route element = {<Profile />} path = "/profile" />
<Route element = {<Post />} path = "/write" />
<Route element = {<Blog />} path = "/post/:id" />
<Route element = {<Edit />} path = "/post/:id/edit" />
<Route element = {<SearchScreen />}  path = "/search" />

<Route element = {<SearchScreen />} path = "/search/title/:title" />
<Route element = {<SearchScreen />} path = "/search/title/:title/description/:description/category/:category/user/:user/pageNumber/:pageNumber" />

</Routes>
</Router>
  )
}

export default App;
