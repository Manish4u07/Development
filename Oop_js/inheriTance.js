class person { //parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        coonsole.log("Talk is called");
    }
}

// child class by extends keyword
class student extends person {
    constructor(name, age, marks) {
        super(name, age);//parent class construtor is being called by SUPER keyword
        this.marks = marks;
    }
}

//another child class
class teacher extends person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}
