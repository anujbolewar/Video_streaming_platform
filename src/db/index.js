import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
 
const connect_db = async()=>{
    try {
        const connection_instance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`db connected HOST : ${connection_instance.connection.host}`)
        
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1)        
    }
}

export default connect_db;