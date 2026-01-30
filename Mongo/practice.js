// getting-started.js
const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection successfull");
    }).catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// const Employee = mongoose.model("Employee",userSchema);
const User = mongoose.model("User", userSchema);

User.updateMany({ age: {$gt:21}},{ age: 20 }).then((res) => {
    console.log(res);
})

// User.find({}).then((res) => {
//     console.log(res);
// });


// User.insertMany([
//     { name: "aman", email: "hello@gmail.com", age: 22 },
//     { name: "anup", email: "hi@gmail.com", age: 21 },
//     { name: "ababdh", email: "lal@gmail.com", age: 21 },
// ]).then((res) => {
//     console.log(res);
// });

// const user1 = new User({
//     name:"Manish",
//     email:"abc@gmail.com",
//     age:20,
// });

// user1.save();


