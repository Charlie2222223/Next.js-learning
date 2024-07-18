import {Router} from "express" 
import { signUp,login,getUserInfo } from "../controllers/AuthControllers.js";
import { varifyToken } from "../middlewares/AuthMiddleware.js";

const authRoutes = Router();

authRoutes.post("/signup",signUp);
authRoutes.post("/login",login);
authRoutes.post("/get-user-info",varifyToken,getUserInfo);

export default authRoutes;