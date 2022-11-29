const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //so we require module which inside date.js file

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //alows us to use static files (css javascript) inside "public" folder
// allows us to use ejs
app.set("view engine", "ejs");
const items = [];
app.get("/", function (req, res) {
  
  const currentDay = date.getDate(); //now we use () because we want to start function from file date.js

  // engine goes to "views" folder and search for document with name "list"
  // kindOfDay is a key it must be the same name as a name of variable inside file list ejs
  // so how function render works: it tells to render file list.ejs inside folder views and find variable with name kindOfDay and give it value of variable day
  res.render("list", { kindOfDay: currentDay, listOfItems: items });
});

// So when user click submit button variable that was added will be writed inside
// variable item and after that make redirection to the same page but vaiable nextItem inside list esj now is not undefined

app.post("/", function (req, res) {
  item = req.body.nextItem;

  items.push(item);

  res.redirect("/");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(process.env.PORT || 3000, function () {      
  console.log(`Server is runnig on port: 3000`);
});

