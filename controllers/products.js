const fs= require("fs")
const Product = require("../models/productsSchema")
const tony = require("../models/ptwoschema")
// const data =JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;

console.log(Product)
// console.log(stark)
// const Product = stark.Shanm

// const ironman = tony.Productt


exports.creating =async (req,res)=>{
    // products.push(req.body);

   //  new ironman(req.body).save()

  await new Product(req.body).save()
   res.send("product added")
   
}

exports.getting = async(req,res)=>{

    const products =await Product.find();

    res.send(products)
   
    }

 exports.getone =async (req, res) => {
        const id =  req.params.id; 

        const products =await ironman.findById(id);

        res.send(products)
     }

     
   exports.putedit = async (req,res) =>  {
     try {
        const id =  req.params.id;
        const putproduct = await ironman.findOneAndReplace({_id:id},req.body)
         res.json(putproduct)
        
     } catch (error) {
        console.log('Error in getting data', error);
        res.status(500).json("wrong")
        
     }
    
    }
   exports.patchedit = async (req,res)=>{
    try {
        const id =  req.params.id;
        const putproduct = await ironman.findOneAndUpdate({_id:id},req.body)
         res.json(putproduct)
        
     } catch (error) {
        console.log('Error in getting data', error);
        res.status(500).json("wrong")
        
     }
    }

   exports.deleting = async (req,res)=>{

    try {
        const id =  req.params.id;
        const putproduct = await ironman.findOneAndDelete({_id:id},req.body)
         res.json(putproduct)
        
     } catch (error) {
        console.log('Error in getting data', error);
        res.status(500).json("wrong")
        
     }
    
    }