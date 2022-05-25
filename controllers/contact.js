const ContactSchema = require('../model/contact')

exports.GetContact = async(req,res)=>{
    try{
    const Contacts = await ContactSchema.find()
    res.status(200).send({msg:'this is the list', Contacts})
    }catch(err){
        res.status(500).send({msg:'error u couldnt get it'})
    }
}

exports.Adduser = async(req,res)=>{
    try{
     const NewContact = new ContactSchema(req.body)
    await NewContact.save()
     res.status(200).send({msg:'u did it', NewContact})
    }catch(err){
       res.status(500).send({msg:'error u couldnt add it'})
    }

}

exports.upDateUser = async (req,res)=>{
try{
   const {id} = req.params
   const updatedUser = await ContactSchema.findByIdAndUpdate(id)
}catch(err){
    res.status(500).send({msg:'you couldnt add it'})
}

}

exports.deleteUser =  async(req,res)=>{ 
    try{
   const {id} = req.params
   const deletUser = await ContactSchema.findByIdAndDelete(id)
   res.status(200).send({msg:'u did it, there is no user'})
}catch(err){
    res.status(500).send({msg:'error u couldnt deleted it'}) 
          }
        }

exports.getUniqueUser = async(req,res)=>{ 
    try{
        const {id} = req.params
        const getUniqueUser = await ContactSchema.findById(id)
        res.status(200).send({msg:'u did it this is ur user',getUniqueUser })
    }catch(err){
        res.status(500).send({msg:'error u couldnt get it'}) 
    }
    }
    
    


