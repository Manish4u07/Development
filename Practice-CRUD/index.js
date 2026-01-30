const express = require("express");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const { log } = require("console");
const app = express();

const port = 1000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));


let Student = [
    {
        id: uuidv4(),
        name: "Manish",
        age: 20,
        course: "CSE"
    },
    {
        id: uuidv4(),
        name: "Akanksha",
        age: 21,
        course: "RIT"
    },
    {
        id: uuidv4(),
        name: "Kshitij",
        age: 20,
        course: "CSE"
    },
    {
        id: uuidv4(),
        name: "Kanika",
        age: 21,
        course: "OTT"
    }, {
        id: uuidv4(),
        name: "Shagun",
        age: 21,
        course: "OTT"
    }
];


app.get("/student", (req, res) => {
    res.render("index.ejs", { Student });
});


app.post("/student", (req, res) => {
    let { name, age, course } = req.body;
    let id = uuidv4();
    Student.push({ id, name, age, course });
    res.redirect("/student");
});


app.get("/student/new", (req, res) => {
    res.render("new.ejs");
});


app.get("/student/:id", (req, res) => {
    let { id } = req.params;
    let student = Student.find((s) => id === s.id);
    res.render("Show.ejs", { student });
});

app.patch("/student/:id", (req, res) => {
    let { id } = req.params;
    let { name, age, course } = req.body;

    let student = Student.find((s) => id === s.id);

    if (!student) {
        return res.send("Student not found. Invalid ID.");
    }

    student.name = name;
    student.age = age;
    student.course = course;

    console.log(student);
    res.redirect("/student");
});


app.get("/student/:id/edit", (req, res) => {
    let { id } = req.params;
    let student = Student.find((s) => id === s.id);
    res.render("edit.ejs", { student });
});

app.delete("/student/:id", (req, res) => {
    let { id } = req.params;
    Student = Student.filter((s) => id != s.id);
    res.redirect("/student");
});

app.listen(port, () => {
    console.log(`listening to port: ${port}`);
});