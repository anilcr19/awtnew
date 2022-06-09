var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    if(req.url=='/'){
        fs.readFile('1287text.txt', function (err, data) {
            res.write(data);
            res.end();
        })
    }
    if(req.url=='/Vrishin'){
        res.write("This is using endpoint Vrishin");
        res.end();
    }
})
server.listen(1212,function(err,data){
    console.log("Server Started");
});
