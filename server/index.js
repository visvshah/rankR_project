import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import listRoutes from "./routes/lists.js";
import userRoutes from "./routes/user.js";
import dotenv from 'dotenv';
const app = express();


dotenv.config();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/lists', listRoutes)
app.use('/user', userRoutes)

//const CONNECTION_URL = 'mongodb+srv://VisvShah:V123321@cluster0.ibin7vz.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server runnning on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));


