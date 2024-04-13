import express from 'express';
import { deleteUser, updateUser, getSingleUser, getAllUser, verifyUser,verifyAdmin } from '../controllers/userController.js';
const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


// Update User 
router.put("/:id", verifyUser, updateUser);

// Delete User
router.delete("/:id", verifyUser, deleteUser);

// Get single User 
router.get("/:id", verifyUser, getSingleUser);

// Get All Users
router.get("/", verifyAdmin, getAllUser);

export default router;