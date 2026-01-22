const Task=require('../models/Task');
//export after creating task    
exports.createTask=async(req,res)=>{
    try{         

        // const title=req.body.title;
        // const description=req.body.description;
        // const status =req.body.status||"pending"
        // const userId=req.body.id;

        const task=await Task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status||"pending",
            user:req.body.id,
        });
        res.status(201).json({msg:"task created successfully"});
    }catch(error){
        res.status(500).send("Server error");
    }
}