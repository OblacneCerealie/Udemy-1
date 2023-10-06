import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let AllA = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    let myActivity = req.body["activity"];
    AllA.push(myActivity);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});










