

const async = require("async")
const services = require("../services")
var sharp = require('sharp')
var sizeOf = require('image-size');

exports.upload = (req,res) =>{

//console.log(req)

   const user = {
        name : req.name,
         email : req.body.email,
         phone : req.body.phone,
         pass : req.body.pass,
         path : req.file.path
    }
 //  console.log(user)


 var d = sizeOf(user.path);
 console.log(d.width, d.height);
 
 var width= Math.round(d.width)
 var height=Math.round(d.height)
 if (width > height ){
 sharp(user.path).resize(Math.round(200,height*200/width),).toFile('./upload/b3.jpg')
 }
 else{
     sharp(user.path).resize(Math.round(width*200/height),200).toFile('./upload/b3.jpg')
 
 }
async.series([
    (cb)=>{

       services.name(user.name,(err,result)=>{
        if(err) 
         cb("error1")
        else if(result)
        cb(null)
        else
       res.send("User Already Exist in the database")

    }
)
},
   (cb)=>{
         services.email(user.email,(err,result)=>{
       if(err)
       cb("error2")
       else if(result)
       cb(null)
       else 
       res.send("Email Already Exist in the database")
   })
   },
   (cb)=>{
    services.phone(user.phone,(err,result)=>{
  if(err)
  cb("error3")
  else if(result)
  cb(null)
  else 
  res.send("Phone no Already Exist in the database")
})
},
   // for phone no
            (cb)=>{
                services.pass(user.pass,(err,result)=>{
                    if(err)
                    cb("Error4")
                    else if(result)
                    cb(null)
                    else {

                      //  console.log(user.name)
                      res.send("password already exists")
                    }
                })
            },


                (cb)=>{
                services.insertData(user,(err,result)=>{
                    if(err)
                    cb(err)
                    else if(result)
                    cb(null,true)
                    else 
                    cb(null,false)
                })
            }]
        ,
            (err,result)=>{
                if(err){

               // console.log(typeof(err))
            res.send(err)
        }
            else if(result)
            res.send("USer added successfully")
            else
            res.send("User not found")
               
            }
        )}
