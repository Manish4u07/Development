const express = require("express");
const InstaData = require("./data.json");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"include")));

const port = 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/Randomnumber", (req, res) => {
    let value = Math.floor(Math.random() * 6) + 1;
    res.render("Random.ejs", { value });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    let data = InstaData[username];
    if (!data) {
        return res.send("User not found in database");
    }

    res.render("instagram.ejs", { username, data });
});  


app.listen(port, () => {
    console.log(`port is listening ${port}`);
});


