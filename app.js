const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
let newitem=["wakeup at 5","practice web development","get ready for college"];
let workitem=[];
app.get("/", (req, res) => {
  let today = new Date();
  let week = today.getDay();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-us", options);
  res.render("list", {
    Listtitle: day,
    items:newitem
  });
});
app.post("/",function(req,res){
  item=req.body.newitem;
  if(req.body.list==="Work"){
    workitem.push(item);
    res.redirect("/work");
  }else{
     newitem.push(item);
     res.redirect("/");
  }
  

});
app.get("/work",(req,res)=>{
  res.render("list",{Listtitle:"Work",items:workitem});
});
app.post("/work",(req,res)=>{
  let item=req.body.newitem;
  workitem.push(item);
  res.redirect("/work");
})
app.listen(3000, () => {
  console.log("sever started on port 3000");
});
