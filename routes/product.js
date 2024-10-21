const express = require("express")
const server= express();

const router = express.Router()

server.use(express.json());

const productController = require("../controllers/products")

//M V C - models views controllers
router.post("/",productController.creating) // localhost:8003/products post
.get("/",productController.getting) //localhost:8003/products get
.get("/:id", productController.getone)
.put("/:id",productController.putedit)
.patch("/:id",productController.patchedit)
.delete("/:id",productController.deleting)


exports.router= router