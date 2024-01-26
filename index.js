var express = require("express"); // needed for http communication (GET POST UPDATE DELETE)
var app = express();
 
 // telling it we are using ejs file
 //express JS always uses a views folder, application won't work without it
app.set('view engine', 'ejs'); // Set the template engine
 
 
app.get('/', function(req,res){
           res.render('home')  
 
})
 
app.get('/about', function(req,res){
 
    res.render('about')

})
 
 
 
// **********************************  Code to here **************************
 
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
  console.log("New Full Demo is Live")
});