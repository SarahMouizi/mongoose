const mongoose = require ('mongoose')

//creation schema

const ContactSchema = mongoose.Schema({
    name : String,
    age : Number,
    email:{
        type : String,
        required : true,
        unique : true,
    }
})

module.exports = mongoose.model('testycontact', ContactSchema)