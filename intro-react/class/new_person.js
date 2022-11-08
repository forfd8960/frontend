class Person {
    name = "Alex";
    age = 28;

    info = () => {
        return "Name: " + this.name + "\n" + "Age: " + this.age; 
    }
}

const p = new Person();
console.log(p.info() + "\n");

class Programmer extends Person {
    name = "Alice"
    age = 29;
    programming = "JavaScript";

    info = () => {
        return "\n" + "programmign with: " + this.programming;
    }
}

const programmer = new Programmer();
console.log(programmer);
console.log(programmer.info());