const express = require("express")
const app = express()

 const routeUser = require("./routes/userRoutes")
 const bodyParser = require("body-parser")

 app.use(bodyParser.urlencoded({  extended : true }))
   app.use(bodyParser.json())

 app.use('/',routeUser)

app.listen(8020,()=>{
    console.log('Server started at port 8020')
})