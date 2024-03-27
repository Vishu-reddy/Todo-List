const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
let newitem=["wakeup at 5","practice web development","get ready for college"];
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
    kindofday: day,
    newitem:newitem
  });
});
app.post("/",function(req,res){
 item=req.body.newitem;
 newitem.push(item);
 res.redirect("/");
});
app.listen(3000, () => {
  console.log("sever started on port 3000");
});
