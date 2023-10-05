import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));





app.get("/", (req, res) => {
  const data = {
    nametag: "What is you name?",
    typedName : false,

  };
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  res.render("index.ejs",
  {name : req.body["fName"],
  surname : req.body["lName"]
  });

});

app.get("/", (req, res) => {
  const data = {
    nameL: nameLength,
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
