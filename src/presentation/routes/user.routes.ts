//routes to user controller
import multer from 'multer';
import { Router } from 'express';
import { createUser,confirmUser } from './../controllers/user.controller';
const formData = multer(); 
const userRoute:Router = Router();
userRoute.post("/user", createUser);
userRoute.post("/user/confirm",formData.any(), confirmUser);

export default userRoute;