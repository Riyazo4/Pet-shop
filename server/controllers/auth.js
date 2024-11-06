import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { expressjwt as expressJwt } from "express-jwt";
import { errorHandler } from "../helpers/dbErrorHandler.js";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(req.body);

    await user.save();
    user.salt = undefined;
    user.hashed_password = undefined;

    res.json({
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: errorHandler(err),
    });
  }
};


     

export const signIn = async (req, res) => {
  try {
    //find the user based on email
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        error: " User not found",
      });

    }
    if (user) {
      //make sure the email and password match
      //create authentication method in user model
      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: "email and password don't match",
        });
      }

      //generate a signed token with  user id and secret
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      //persit the token as "t" in cookie with exp date
      res.cookie("t", token, { expire: new Date() + 9999 });

      //return response with user and token to the frontend client
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, name, email, role } });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const signOut = async (req, res) => {
  res.clearCookie("t");
  res.json({ Message: "SignOut Success" });
};

// midelwares
export const requireSignin = expressJwt({

    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth",

  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",

});


export const isAuth = (req, res, next) => {
  console.log("req.profile._id-----------", req.profile._id);
  console.log("req.auth._id-----------", req.auth._id);
  const user = req.profile && req.auth && req.profile._id == req.auth._id;
  console.log(
    "---------------------------------------------------------",
    user
  );
  if (!user) {
    console.log("isAuth: Access denied");
    return res.status(403).json({
      error: "Access denied",
    });
  }
  console.log("isAuth: Access granted");
  next();
};


export const isAdmin = (req, res, next) => {
  if (req.profile.role === false) {
    console.log("isAdmin: Admin resource! Access denied");
    return res.status(403).json({
      error: "Admin resource! Access denied",
    });
  }
  console.log("isAdmin: Admin access granted");
  next();
};



export default { signup, signIn,signOut, requireSignin,isAdmin, isAuth };

