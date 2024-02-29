const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        Required: true,
    },
    email: {
        type: String,
        Required: true,
    },
    phone: {
        type: String,
        Required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    description: {
        type:String,
        Required:true,
    }
    
}, { timestamps: true })//jb ham insert krege to 2 field dega createdadd -->date time btyegi or update
const ContactModel = mongoose.model('contact', ContactSchema)
module.exports = ContactModel