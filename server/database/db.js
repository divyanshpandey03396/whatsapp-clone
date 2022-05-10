import mongoose from "mongoose";

const Connection = async (username,password) => {
    const URL=`mongodb+srv://${username}:${password}@chatapp.ohdjk.mongodb.net/WHATSAPPCLONE?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};
export default Connection;