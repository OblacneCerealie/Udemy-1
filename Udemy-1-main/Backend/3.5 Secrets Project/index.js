//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

let password = ""

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));


function PC(req, res, next){
    password = req.body["password"];
    if (password==="ILoveProgramming"){
        next();
    }else{}
}





app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

app.use(PC);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
