import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const uri = process.env.MONGO_DB_URI;
        console.log("Attempting to connect to:", uri); // Debugging
        await mongoose.connect(uri); // No need for useNewUrlParser or useUnifiedTopology
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
    }
};

export default connectToMongoDB;
