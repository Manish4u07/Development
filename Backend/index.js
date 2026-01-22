const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Its working app is listening ${port}`);
});

// app.use((req,res) => {
//     console.log("request received");
//     let code ="<h1>Cars</h1><ul><li>BMW M4 competetion</li><li>Defender</li></ul>";
//     res.send(code);
// });

app.get("/",(req,res) => {
    res.send("its home page!!");
});

app.get("/search", (req,res) => {
    let {q} = req.query;
    console.log(req.query);
    console.log(q); 
    res.send(`you searched for ${q}`);
});

app.get("/register", (req,res) =>{
    res.send("Standard GET request");
});

app.post("/register", (req,res) =>{
    let { user ,password } =req.body;
    res.send(`Standard post request welcome @${user}`);
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());