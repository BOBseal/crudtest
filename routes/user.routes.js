import express from 'express'
import { addUser , getUser , getAllUsers , deleteUser } from '../controllers/user.controller.js'
import initializeStorage from '../utils/storage.js'
import multer from 'multer'

const router = express.Router();

router.get('/get-user/:address' , getUser);
router.get('/all-users' , getAllUsers);
router.delete('/:address' , deleteUser);

// query
router.post('/add-user' , addUser); 

export default router;