import express from "express"
const router = express.Router();

import auth from "../controllers/auth.js";
import { userSignupValidator } from '../validators/index.js'
const { signup, signIn,signOut,requireSignin } = auth;



router.post('/signup',userSignupValidator , signup)
router.post('/signIn', signIn)
router.get('/signOut', signOut)

// for testing
router.get("/test",requireSignin,(req,res)=>{
    res.json({message:"test page"})
} )



export default router