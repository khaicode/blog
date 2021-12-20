const bcrypt = require("bcryptjs")
const users = [
    {
        username:"Khai",
        email:"Khai@gmail.com",
        password:bcrypt.hashSync("Khai2002",8),
        isAdmin:true,
        profilePic:"/images/pic.jpg"
    }
]
module.exports = users