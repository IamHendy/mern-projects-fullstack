import dotenv from "dotenv"
import express from "express";
import connectToMongoDB from "./db/connectToMongoDB.js";
import fs from "fs";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables
dotenv.config(); // Ensure `.env` file is loaded

app.use(express.json());//parse incoming requests with JSON payload 
app.use(cookieParser());//parse incoming cookies from req.body

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);




// Root route
//app.get("/", (req, res) => {
   // res.send("Hello World!!!");
//});

// Start server
app.listen(PORT, () => {
    connectToMongoDB(); // Connect to MongoDB
    console.log(`Server is Running on port ${PORT}`);
});
