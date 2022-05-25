const express = require('express')

const ContactRouter = express.Router()
const {GetContact,Adduser,upDateUser,deleteUser,getUniqueUser} = require ('../controllers/contact')

//get all user
ContactRouter.get('/',GetContact )


//add a user
ContactRouter.post('/',Adduser )

//update a user
ContactRouter.put('/:id',upDateUser)

//delete a user
ContactRouter.delete('/:id',deleteUser)

//option get a unique user
ContactRouter.get('/:id', getUniqueUser) 



module.exports = ContactRouter