const express = require("express")
const router = express.Router()
const expressJoi = require('express-joi')
const validate = require("../joiValidator")

const multer = require("multer")


  const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'./upload/')
    },
    filename :(req,file,cb)=>{
    
        cb(null,file.originalname)
    }
})


const filefilter = (req,file,cb)=>{
//rejecting a file
if(file.mimetype== 'image/png' || file.mimetype== 'image/jpeg')
    cb(null,true)
else 
cb(null,false)
}
const upload =  multer({
    storage : storage,
    fileFilter : filefilter
})

//Contrtollers


const signup = require("../controller/signup")
const log = require("../controller/login")
const del = require("../controller/deleteUser")
const update = require("../controller/updateUser")
const image = require("../controller/AddImage")

  
  
    router.post('/signup',expressJoi.joiValidate(validate.userSchema.signup),(req, res)=>{
       signup.sign(req.body,res)
    })
 
       router.post('/upload',upload.single('image'),(req, res)=>{
      image.upload(req,res)
//    console.log(req.body)
       
})

router.get('/login', expressJoi.joiValidate(validate.userSchema.login),(req,res)=>{
     
     log.login(req.query,res)
 //  console.log(req.query)
})

router.put('/update',expressJoi.joiValidate(validate.userSchema.update),(req,res)=>{
   // console.log(req)
      update.updateUser(req.body,res)
       })

router.delete('/delete',(req,res)=>{
    del.deleteUser(req.body,res)
    })
module.exports = router