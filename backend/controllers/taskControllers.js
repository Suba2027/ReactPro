// const Task=require('../models/Task');
// //export after creating task    
// exports.createTask=async(req,res)=>{
//     try{         

//         // const title=req.body.title;
//         // const description=req.body.description;
//         // const status =req.body.status||"pending"
//         // const userId=req.body.id;

        
//         const task=await Task.create({
//             title:req.body.title,
//             description:req.body.description,
//             status:req.body.status||"pending",
//             user:req.user.id,
//         });
//         res.status(201).json({msg:"task created successfully"});
//     }catch(error){
//         res.status(500).send("Server error");
//     }
// }
const Task = require('../models/Task');

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || "pending",
      user: req.user.id, // ✅ logged-in user
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET TASKS (ONLY FOR LOGGED-IN USER)
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTaskById=async(req,res)=>{
    try{
        const task=await Task.findOne({
            _id:req.params.id,  //id comes from parameter so params
            user:req.user.id
        });
        res.json(task);
    }catch(error){
        res.json(error);
    };
}

exports.updateTask=async(req,res)=>{
    try{
    const task=await Task.findOneAndUpdate({
        _id:req.params.id,
        user:req.user.id
    },{
        title:req.body.title,
        description:req.body.description,
        status:req.body.status
    },{
        new:true
    });
    if(!task){
        return res.status(404).json({msg:"task not found"});
    }
    res.json({msg:"task updated successfully",task});
}
catch(error){
    res.status(500).json({msg:"server error"}); 
}
};


// also for delete
exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({
            _id:req.params.id,
            user:req.user.id
        });
        if(!task){
            return res.status(404).json({msg:"task not found"});
        }
        res.json({msg:"task deleted successfully",task});
    }catch(error){
        res.status(500).json({msg:"server error"}); 
    }
};

exports.updateTaskPatch=async(req,res)=>{
    try{
    const task=await Task.findOneAndUpdate({
        _id:req.params.id,
        user:req.user.id
    },
        req.body,{new:true},
);
    if(!task){
        return res.status(404).json({msg:"task not found"});
    }
    res.json({msg:"task updated successfully",task});
}
catch(error){
    res.status(500).json({msg:"server error"}); 
}
}