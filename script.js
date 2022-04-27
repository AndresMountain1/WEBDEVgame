const mongoose = require("mongoose")
const User = require("./User")
mongoose.connect("mongodb://localhost/testdb")

run()
async function run(){
    const user = await User
new user({name:"Pierre", password: 123})
await user.save()
console.log(user)


}