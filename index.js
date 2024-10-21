const express = require("express")
var cors = require('cors')
const server= express();
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")
const mongoose = require('mongoose');
server.use(cors())
server.use(express.json());

server.use("/products",productRouter.router)
server.use("/users",userRouter.router)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://b14:b14@cluster0.txylh8d.mongodb.net/');
  console.log("DB connected")
  
}
server.listen(8003, function (req,res) {
    console.log("server")
    
})