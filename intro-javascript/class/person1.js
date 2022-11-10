class Human {
    constructor() {
        this.age = 28;
    }
    printAge() {
        console.log("Age: " + this.age);
    }
}

class PersonV1 extends Human{
    constructor() {
        super();
        this.name = 'Alex';
        this.age = 26;
    }

    printName() {
        console.log("Name: " + this.name);
    }
}

const p = new PersonV1();
p.printName();
p.printAge();