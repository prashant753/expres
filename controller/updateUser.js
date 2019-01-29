const async = require("async")
const services = require("../services")

exports.updateUser = (req,res) =>{

                services.update(req,(err,result)=>{
                    if(err) 
                    res.send(err)
                    else if(result)
                    res.send("User Updated Successful")
                    else
                    res.send("User Not found")
                })

}
