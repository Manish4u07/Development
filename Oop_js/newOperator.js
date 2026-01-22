function Person(name,age){
    this.name = name;
    this.age = age;
    console.log(this);   
}

personalbar.prototype.talk = function () {
    console.log(`Hi my name is ${name}`);
};

let p1 = new Person("manish",20);