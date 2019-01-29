const async = require("async")
const services = require("../services")

exports.sign = (req,res) =>{

//console.log(req)

   const user = {
        name : req.name,
         email : req.email,
         phone : req.phone,
         pass : req.pass,
    }
 //console.log(user)
async.series([
    (cb)=>{

       services.name(user.name,(err,result)=>{
        if(err) 
         cb("error")
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
       cb("error")
       else if(result)
       cb(null)
       else 
       res.send("Email Already Exist in the database")
   })
   },
   (cb)=>{
    services.phone(user.phone,(err,result)=>{
  if(err)
  cb("error")
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
                    cb("Error")
                    else if(result)
                    cb(null)
                    else {

                      //  console.log(user.name)
                      res.send("password already exists")
                    }
                })
            },


                (cb)=>{
                services.insertData(req,(err,result)=>{
                    if(err)
                    cb("error")
                    else if(result)
                    cb(null,true)
                    else 
                    cb(null,false)
                })
            }]
        ,
            (err,result)=>{
                if(err){

           //     console.log(typeof(err))
            res.send(err)
        }
            else if(result)
            res.send("USer added successfully")
            else
            res.send("User not found")
               
            }
        )}
