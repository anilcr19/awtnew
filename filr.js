var fs = require('fs')
fs.readFile('1284text.txt',function(err,data){
    console.log(data.toString());
})
fs.writeFile('1287_text.txt',"Nice to meet you",function(err,data){
    console.log("Data Inserted");
})
fs.appendFile('1287_text.txt'," This is appended line",function(err,data){
    console.log("Data appended");
})
fs.rename('1287_text.txt','1287text.txt',function(err,data){
    console.log("File name changed");
})
fs.unlink('1287text.txt',function(err,data){
    Console.log("File removed");
})
