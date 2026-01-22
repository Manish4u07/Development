function personmaker(name,age){
    const person = {
        name: name,
        age : age,
        talk() {
            console.log(`Hi , my name is ${name}`);
        },
    };
}

let p1 = new personmaker("adam",17);
let p2 = new personmaker("kastij",20);
