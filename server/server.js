import dotenv from 'dotenv'
dotenv.config()
import express from "express";
const app = express();
import cors from "cors";
// import connectDB from "./models/connection.js";

import mongoose from "mongoose";
import bodyParser from 'body-parser';
import morgan from 'morgan'
import cookieParser from "cookie-parser"


// db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
    app.listen(port, () => {
      console.log(`server runs on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log("DB Error", err));

  
//import routes
import authRouter from "./routes/auth.js"
import categoryRouter from "./routes/category.js"
import productRouter from "./routes/product.js"

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cookieParser())
// app.use(expressValidator())

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE',  // Specify the methods you want to allow
  allowedHeaders: 'Content-Type,Authorization' // Specify the headers you want to allow
};
app.use(cors(corsOptions))


// routes middleware

app.use('/api',authRouter)
// app.use('/api',userRouter)
app.use('/api',categoryRouter)
app.use('/api',productRouter)

const port = process.env.PORT || 8000;
