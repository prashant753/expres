const con = require("./connection")

const services = {
    name : (name,cb)=>{
            con.query("SELECT * FROM users WHERE name = ?",[name],(err,result)=>{
                if(err) console.log("Error :::")
                else if(result.length>0){
                    console.log(result)
                    cb(null,false)
                }
              
                else{
                    console.log(result)
                    cb(null,true)
                }
            
            })
    },
    email : (email,cb)=>{
        con.query("SELECT * FROM users WHERE email = ?",[email],(err,result)=>{
                    if(err) 
                    cb("null")
                    else if(result.length > 0)
                    cb(null,false)
                    else
                    cb(null,true)
        })
    },
    phone : (phone,cb)=>{
        con.query("SELECT * FROM users WHERE phone = ?",[phone],(err,result)=>{
                    if(err)   cb("null")
                    else if(result.length > 0)
                    cb(null,false)
                    else
                    cb(null,true)
        })
    },
    pass : (pass,cb)=>{
        con.query("SELECT * FROM users WHERE password = ?",[pass],(err,result)=>{
                    if(err)   cb("null")
                    else if(result.length > 0)
                    cb(null,false)
                    else
                    cb(null,true)
        })
    },


    insertData : (req,cb)=>{

        con.query('INSERT INTO users(name,email,phone,password,image) VALUES (?,?,?,?,?)',[req.name,req.email,req.phone,req.pass,req.path],(err,result)=>{
            if(err) cb(err)
            else
                cb(null,true)
        })
    },
    checkEmail : (email,cb)=>{
        con.query("SELECT * FROM users WHERE email = ?",[email],(err,result)=>{
            if(err) 
            cb('error')
            else if(result.length > 0)
             cb(null,true)
            else
            //console.log(email);
            cb(null,false);
            
        })
    },
    checkPass : (pass,cb)=>{
        con.query("SELECT * FROM users WHERE password = ?",[pass],(err,result)=>{
            if(err) 
            cb(err)
            else if(result.length > 0)
             cb(null,true)
            else
            //console.log(pass);
            cb('pass didnt matched')
            
        })
    },
    deleteUser : (req,cb)=>{
        con.query("SELECT * FROM users WHERE email = ? and password = ?",[req.email,req.pass],(err,result)=>{
            if(err) 
            cb('error occured')
            else if(result.length > 0)
             {
                 con.query("DELETE FROM users WHERE email = ? and password = ?",[req.email,req.pass],(err,res)=>{
                     if(err) res.send(err)
                     else
                     cb(null,true)
                 })
             }
            else
            //console.log(pass);
            cb(null,false)
    })
},
                    update : (req,cb)=>{
                        con.query("SELECT * FROM users WHERE email = ? and password = ?",[req.email,req.pass],(err,result)=>{
                            if(err) 
                            cb('error occured')
                            else if(result.length > 0){
                                con.query("UPDATE users SET password = ? where email = ?",[req.new_pass,req.email],(err,res)=>{
                                    if(err) res.send(err)
                                    else
                                    cb(null,true)
                                })
                            }
                            else
                            cb(null,false)
                        })
                    }
}
module.exports = services