const express = require("express")
const server= express();

const router = express.Router()

server.use(express.json());

//mongodb+srv://b14:b14@cluster0.txylh8d.mongodb.net/

const productController = require("../controllers/products")

//M V C - models views controllers
router.post("/",productController.creating)
.get("/",productController.getting)
.get("/:id", productController.getone)
.put("/:id",productController.putedit)
.patch("/:id",productController.patchedit)
.delete("/:id",productController.deleting)


exports.router= router