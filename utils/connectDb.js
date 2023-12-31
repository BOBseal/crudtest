import mongoose from "mongoose"

const dbConnection = async() => {
     try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected")
     } catch (error) {
        console.log('database connection failed', error.message)
     }
}

export default dbConnection;