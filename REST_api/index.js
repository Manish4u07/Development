const express = require("express");
const app = express();

const port = 8080;
//path
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "Manish",
        content: `I love coding!`
    }, {
        username: "kastij",
        content: `I love Gandmasti!`
    }, {
        username: "Pawan",
        content: `I love BAckchodi!`
    }
];

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({username,content});
    res.redirect("/posts");
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});