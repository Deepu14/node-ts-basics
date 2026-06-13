import express from 'express';
import {getUsers,addUser,deleteUser} from '../services/userService.js';
const router = express.Router();
router.get('/',(req,res)=>{res.json(getUsers());});
router.post('/',(req,res)=>{res.json(addUser(req.body));});
router.delete('/:name',(req,res)=>{ const result = deleteUser(req.params.name)
                                      if(result===null)
                                      {
                                        res.status(404).json({ message: "User not found" })                                                               
                                      }
                                      else
                                      {
                                        res.json(result); 
                                      }
                                      });


export default router;