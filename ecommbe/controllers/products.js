const fs= require("fs")
const stark = require("../models/productsSchema")
const tony = require("../models/ptwoschema")
// const data =JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;

const Product = stark.Shanm

const ironman = tony.Productt


exports.creating = (req,res)=>{
    // products.push(req.body);

    new ironman(req.body).save()

//   new Product(req.body).save()
   res.send("product added")
   
}

exports.getting = async(req,res)=>{

    const products =await ironman.find();

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