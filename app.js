const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

// App.get happen when i try to access the server when i access the Url it is going to fetch the index.html and display the content on my Screen 
app.get("/", function(req, res){

    var today = new Date();
    var currentday = today.getDay();
    var day = ""

    switch(currentday) {
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
        case 5:
            day = "Friday"
        case 6:
            day = "Saturday"
        case 0:
            day = "Sunday"                         
        default:
            day = "Error"
      }

    res.render("list", {kindOfDay: day})// Render a file called list and past a variable called kindOfDay
});

app.listen(3000, function (){
    console.log("Server started on port 3000"); // Listen to that port 
})