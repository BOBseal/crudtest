import express from 'express'
//import path from 'path'
import dotenv from 'dotenv'
import 'express-async-errors'
//import morgan from 'morgan'
import cors from 'cors'
import dbConnection from './utils/connectDb.js'
import userRoutes from './routes/user.routes.js'
//import {notfound} from './middlewares/notFound.js'
import {helmet , xss , mongoSanitize , rateLimit} from './utils/security.js'

dotenv.config();

const app = express();
const limiter = rateLimit({windowMs: 15*60*1000 , max:1000 , message:"Rate limit reached"})

dbConnection();

app.use(express.json({ limit:"4mb" }))
// SECURITY HANDLING
app.use(limiter) // to limit request from the same IP address
app.use(helmet()) 
app.use(mongoSanitize()) // to sanitize any query to mongodb db
app.use(xss()) // to prevent xss attack

app.use('/api' , userRoutes);

app.listen(5000 ,()=>{
    console.log("running on port 8000")
})
