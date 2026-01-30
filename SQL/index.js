// import { faker } from "@faker-js/faker";
// import { createConnection } from "mysql2";
// // const express = reqiure("express");
// import express from "express";
// import  methodOverride from "method-override";
// const app = express();

const express = require("express");
const methodOverride = require("method-override");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const { v4: uuidv4 } = require("uuid");


const app = express();
const path = require("path");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Manish@123',
});

let getUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}


// let data = [];
// for (let i = 0; i < 100; i++) {
//     data.push(getUser());
// }

// //inserting new data
// let q = "insert into user (id,username,email,password) values ?";
// let A = "alter table user modify id varchar(40) unique not null";
// Test connection
connection.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err.message);
        return;
    }
    console.log("MySQL connected successfully");
});

app.get("/", (req, res) => {
    let q = `select count(*) from user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        res.render("Some error int dataabse!");
    }
});

//all user route
app.get("/user", (req, res) => {
    let q = `select * from user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("showUsers.ejs", { users });
        });
    } catch (err) {
        res.send("Some error in DB");
    }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id ='${id}' `;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        res.render("Some error in databse!");
    }
});

//Update (DB)route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: formName } = req.body;
    let q = `select * from user where id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong Password");
            } else {
                let q = `update user set username ='${formName}' where id = '${id}'`;
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    console.log("Updated successfully");
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
    }

});

//add new user form
app.get("/user/new", (req, res) => {
    console.log("Path to new user:");
    res.render("new.ejs");
});

//ADD new user
app.post("/user", (req, res) => {
    let id = uuidv4();
    let { username: name, email, password } = req.body;
    let q = `INSERT INTO USER (id,username,email,password) values ('${id}','${name}','${email}','${password}')`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            console.log("New user added");
            res.redirect("ShowUsers.ejs");
        });
    } catch (err) {
        console.log("some error in DB");

    }

});

//delete user
app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let q = `delete from user where id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log("Deleted user successfully!");
            res.redirect("/user");
        });
    } catch (err) {
        res.send("Some error in DB");
    }
});


app.listen("2000", () => {
    console.log(`server is listening to port 2000 `);
});



// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();

