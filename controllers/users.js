const fs= require("fs")
const data =JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;

// console.log(users)


exports.creating = (req,res)=>{
    users.push(req.body);
    res.send(req.body)
}

exports.getting = (req,res)=>{
    res.send(users)
    }

 exports.getone = (req, res) => {
        const id =  +req.params.id; 
        const user = users.find(p=> p.id === id);  
        res.send(user)
   }
   exports.putedit = (req,res)=>{
        const id =  +req.params.id;
        const userindex = users.findIndex(p=> p.id === id);
        users.splice(userindex,1,{...req.body  ,   id:id})
        res.json("edited")
    
    }
   exports.patchedit = (req,res)=>{
        const id =  +req.params.id;
        const userindex = users.findIndex(p=> p.id === id);
        let user = users[userindex] // 
        users.splice(userindex,1,{...user,...req.body  })
    
        res.json("edited")
    
    }

   exports.deleting = (req,res)=>{

        const id =  +req.params.id;
       
        const userindex = users.findIndex(p=> p.id === id);
        users.splice(userindex,1) //23,1
    
        res.json("deleted")
    
    }