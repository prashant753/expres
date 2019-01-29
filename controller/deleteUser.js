const async = require("async")
const services = require("../services")

exports.deleteUser = (req,res) =>{

                services.deleteUser(req,(err,result)=>{
                    if(err) 
                    res.send(err)
                    else if(result)
                    res.send("User Deleted Successful")
                    else
                    res.send("User Not found")
                })

}
