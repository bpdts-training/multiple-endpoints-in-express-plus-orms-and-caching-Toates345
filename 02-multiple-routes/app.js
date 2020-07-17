let express = require("express");
let app = express();

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

app.get("/", (req,res,next) => {
res.json("Welecome to the web server");
});

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/films",(req, res, next) => {
    res.json(["Star Wars", "Jurassic Park", "The Lord of the Rings", "The Dark Knight"]);
});

app.get("/meals",(req, res, next) => {
    res.json(["Spagatti", "Mixed Grill", "Chicken Korma", "Pizza"]);
});