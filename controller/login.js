//const async = require("async")
const services = require("../services")

exports.login = (req,res) =>{

//console.log(req)

  const user = {
        name : req.name,
         email : req.email,
         phone : req.phone,
         email : req.email,
         pass : req.pass,
  }

    services.checkEmail(user.email,(err,result)=>{
        if(err)
        res.send(err)
        else if(result) {

       services.checkPass(user.pass,(err,result)=>{
           if(err)
           res.send(err)
         
           else if(result)
           res.send("Login Successful")
       })

    }
    else 
    res.send("User not found")
  

       // console.log(user.email)
    })
}
