
import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/mern-auth")
        console.log("db connect")
    } catch (error) {
        console.log(`db error ${error}`)

    }
}

export default connectDB