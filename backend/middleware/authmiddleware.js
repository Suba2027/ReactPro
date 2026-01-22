// const jwt=require('jsonwebtoken');
// exports.protect=(req,res,next)=>{
//         const token=req.headers.authorization.split(' ')[1];
//         if(!token||!token.startsWith('Bearer')){
//             return res.status(401).json({msg:"not authorized,no token"});
//         }
//         try{
//             // token=token.split(' ')[1];
//             const decoded=jwt.verify(token,process.env.JWT_SECRET);
//             req.user=decoded;
//             next();
//         }catch(error){
//             res.send("Invalid token");
//         }
// }

const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer ')
  ) {
    return res.status(401).json({ msg: "not authorized, no token" });
  }

  const token = req.headers.authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id: userId }
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

