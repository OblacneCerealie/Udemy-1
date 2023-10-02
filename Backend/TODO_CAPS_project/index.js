import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import path from "path";




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
    res.redirect("/")


    
    
    
    res.render("index.ejs", {
        activitiesL: AllA

    });
    }); 























app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });