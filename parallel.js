console.log("program started");

var async = require("async");
async.parallel([
  function(callback){
        setTimeout(function(){
            console.log("first step--->")
            callback(null,"1");

        },0);
    },
   function(callback){
            setTimeout(function(){
                console.log("second step--->")
                callback("error","2");

            },0);
        },
        function(callback){
            setTimeout(function(){
                console.log("third step--->")
                callback(null,"3");

            },0);
        }
    ],
    function(err,result){
        console.log(result);

    })
    console.log("program ended")