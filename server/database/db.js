import mongoose from "mongoose";

const URL = `mongodb+srv://rkyogi5855:Sahil2411@cluster0.imbuwfp.mongodb.net/Food-Order?retryWrites=true&w=majority`;


const Connection = async () =>{

    try{
       await mongoose.connect(URL);
       console.log('database is connected');
    }
    catch(err){
        console.log('Error while calling the server', err);
    }
}

export default Connection;