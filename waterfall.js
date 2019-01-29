console.log("program started");
var async = require("async");
async.waterfall(
    [
        function(callback){
            console.log("first step----->");
            callback("error",'2','1');
        },
        function(arg1,arg2,callback){
            console.log("second step-->"+arg1+" "+arg2);
            callback(null,3);
        },
        function(arg3,callback){
            console.log("third step--->"+arg3);
            callback(null,"Sucess");
        }],
        function(callback,result){
            console.log("Main callback-->"+result);
        }
    
)
console.log("program ended");

global.daa = "hello"