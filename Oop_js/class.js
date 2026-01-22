class person { // class define
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        coonsole.log(`Talk is called ${this.name}`);
    }
}

let p1 = new person("Manish",20);
