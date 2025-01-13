const {default : mongoose}= require("mongoose");
exports.connectDB= async()=>{
    try {
        // const connect = await mongoose.connect(process.env.MONGO_URL);
        const connect = await mongoose.connect("mongodb+srv://rohit1447481:3TuByNRJGNF0Ox5O@cluster0.ij0ki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        if(connect){
            console.log("MongoDb is connected");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}

