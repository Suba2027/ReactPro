const express = require('express');
const router=express.Router();
const {register,login}=require('../controllers/authControllers');
// when we export many files use {} and for main export i.e module.exports we dont use {} instead we directly import it
router.post('/register',register);
router.post('/login',login);

module.exports=router;

