import express from "express";


const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const d = new Date();
    const day = d.getDay();
    //console.log(day);
    let type = "weekday";
    let adv = "its time to work hard";
    if (day ===0 || day===6){
        let type = "weekend";
        let adv = "VAAAAAMOSSSS A LA PLAYAAAAAA";
    }

    res.render("index.ejs", 
    { dayType: type, 
    advice: adv });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
