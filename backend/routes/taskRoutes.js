const express = require('express');
const router=express.Router();
const {createTask, getTasks,getTaskById,updateTask, updateTaskPatch, deleteTask}=require('../controllers/taskControllers');
const {protect}=require('../middleware/authmiddleware');
const { route } = require('./authRoutes');
router.post('/newTasks',protect,createTask);//ok
router.get('/getTasks',protect,getTasks);//ok
router.get('/getTask/:id',protect,getTaskById);//ok
router.put('/updateTask/:id',protect,updateTask);//ok
router.patch('/updateTaskPatch/:id',protect,updateTaskPatch);//ok
router.delete('/deleteTask/:id',protect,deleteTask);
module.exports=router;
