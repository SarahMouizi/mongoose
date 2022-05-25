const mongoose = require ('mongoose')

const connectdb = async() =>{
        try{
       await mongoose.connect('process.env.uri')
        console.log('db is connected')
        }catch(err){
        console.log(err)
        }
}



module.exports = connectdb