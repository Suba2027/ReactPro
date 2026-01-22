const jwt=require('jsonwebtoken');
exports.protect=(req,res,next)=>{
        const token=req.headers.authorization;
}