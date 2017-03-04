var fs= require("fs");
var con=fs.readFile("ex.txt","utf-8",function(error,text)
{
if(error)
throw error;
console.log("File contained:",text);
//var con=text;
});
fs.writeFile("ex1.txt",+con,function(err){
if(err)
throw err;
else
console.log("File written.");
});
