const mongoose = require('mongoose')
const liveUrl ='mongodb+srv://salonigarg152:saloni123@cluster0.4tcnyy4.mongodb.net/AdmissionPortal?retryWrites=true&w=majority&appName=Cluster0'
const localUrl = 'mongodb://127.0.0.1:27017/admission'
const connectDb = () => {
    return mongoose.connect(liveUrl)
        .then(() => {
            console.log("connected successfully");
        })
        .catch((err) => {
            console.log(err);
        });
}
module.exports = connectDb;