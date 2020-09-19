const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));

var items = ["Buy Food","Cook Food","Eat Food"];

function getDayofWeek(){
    var today = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    var day = today.toLocaleDateString("en-US",options);    
    return day;
}

app.get("/",(req,res)=>{
    var day = getDayofWeek();

    res.render("list",{kindofDay : day, itemsList : items});
});

app.post("/",(req,res)=>{
    var newItem = req.body.listItem;
    items.push(newItem);

    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})