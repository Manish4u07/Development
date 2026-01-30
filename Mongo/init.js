const mongoose = require("mongoose");
const Chat = require("./modals/chat");

main()
    .then((res) => {
        console.log("Connection successful");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "manish",
        to: "Akanksha",
        message: "Ladli miuaaaun.",
        created_at: new Date(),
    },{
        from: "Harsh",
        to: "kshitij",
        message: "Ladle miuaaaun.",
        created_at: new Date(),
    },{
        from: "Manish",
        to: "Harsh",
        message: "Chusoo",
        created_at: new Date(),
    },{
        from: "Shagun",
        to: "kshitij",
        message: "Ladle miuaaaun.",
        created_at: new Date(),
    },{
        from: "kanu",
        to: "Manish",
        message: "Ladle miuaaaun.",
        created_at: new Date(),
    },{
        from: "Kanu",
        to: "Akanksha",
        message: "Ladli miuaaaun.",
        created_at: new Date(),
    },{
        from: "Shagun",
        to: "To all",
        message: "Ladlo miuaaaun.",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);