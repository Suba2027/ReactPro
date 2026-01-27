// // to hide the password to encrytpt it before saving to database for that we use bcryptjs
// const bcrypt = require('bcryptjs');
// // to generate token for user authentication we use jsonwebtoken
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// exports.register=async(req,res)=>{
//     const {name, email, password}=req.body;
//         const existingUser=await User.findOne({email});
//         if(existingUser){
//            return res.status(400).send({message:"user already exista"})
//         }
//         const hashedPassword=await bcrypt.hash(password,10);
//         //10 is the salt rounds for hashing it 2^10 times to make it more secure,here 10 is stable and fast enough 
//         const user=await User.create({
//             name,
//             email,
//             password:hashedPassword,
//         });
//         return res.status(201).json({msg:"user created successfully"});
//         // res.status(201).send({msg:"user created successfully"});
// }
//        exports.login=async(req,res)=>{
//         try{
//             const {email,password}=req.body;
//             const existingUser=await User.findOne({email});
//             if(!existingUser){
//                res.status(400).send("user not found");
//             }
//             const isMatching=await bcrypt.compare(password,existingUser.password);
//             if(!isMatching){
//                res.status(400).send("invalid credentials");
//             }
//             const token=jwt.sign({id:existingUser._id},
//             process.env.JWT_SECRET,
//             {expiresIn:'1d'}
//             )
//             res.status(200).send("login successfull")
//             res.json({token})
           
               
//         }catch(error){
//             res.status(500).send(error);
//         }
//     }

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// bcryptjs==Used to hash passwords before storing them in the database.
// Also used to compare hashed passwords during login.
// jsonwebtoken (jwt)
// Used to generate authentication tokens.
// Tokens are sent to the client after login and used for protected routes.
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ msg: "user created successfully" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).send("user not found");
    }

    const isMatching = await bcrypt.compare(password, existingUser.password);
    if (!isMatching) {
      return res.status(400).send("invalid credentials");
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // send token and maybe user info
    return res.status(200).json({
      message: "login successful",
      token,
    });
  } catch (error) {
    return res.status(500).send(error);
  }
};
