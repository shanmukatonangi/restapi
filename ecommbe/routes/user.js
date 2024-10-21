const express = require("express")
const server= express();

const router = express.Router()

server.use(express.json());



const userController = require("../controllers/users")

//M V C - models views controllers
router.post("/",userController.creating)
.get("/",userController.getting)
.get("/:id", userController.getone)
.put("/:id",userController.putedit)
.patch("/:id",userController.patchedit)
.delete("/:id",userController.deleting)


exports.router= router