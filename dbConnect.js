import mongoose from "mongoose";
import dotenv from 'dotenv'
mongoose.set('strictQuery', false)

dotenv.config({
    path: './.env'
})

const connectToDB = async() => {
    try { 
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}` )
    
        if(connectionInstance){
        console.log("CONNECT TO DB :: HOST :: ", connectionInstance.Connection.host);
    }
       
    } catch (error) {
        console.log(`mongodb connection failed ${error}`);        
        process.exit(1);
    }
}
export default connectToDB;