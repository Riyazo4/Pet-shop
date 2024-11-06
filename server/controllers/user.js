
import User from "../models/user.js";

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }
        req.profile = user;
        next();
    } catch (error) {
        console.error('Error in userById:', error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
};


// Read And Update Profile
export const readProfile = async(req, res) =>{
    try {
        req.profile.hashed_password = undefined
        req.profile.salt = undefined
        return res.json(req.profile)
    } catch (error) {
        return res.status(500).json({
            error:"Something went wrong"
        })
        
    }

}

export const updateProfile = async(req, res)=>{
    try {
        const userData = await User.findOneAndUpdate(
            {_id: req.profile._id},
            {$set: req.body},
            {new : true}

        )
        if(!userData){
            return res.status(400).json({
                error :" You are not allowed to perform this action"
            })
        }
        userData.hashed_password = undefined
        userData.salt = undefined
        return res.json(userData)

        
    } catch (error) {
        return res.status(500).json({
            error:"Something went wrong"
        })
        
        
    }
}

export default {
    userById,
    readProfile,
    updateProfile
}