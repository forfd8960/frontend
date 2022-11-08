let name = "my name";
console.log(name);

name = "John";
console.log(name);

function printName(name) {
    console.log(name);
}

printName('Bob');

const printName1 = (name) => {
    console.log(name);
}

printName1('Alex');

const fn = () => {
    console.log("arrow function with no arguments");
}
fn();

const fnWithMiltiArgs = (name, age, weight) => {
    console.log(name);
    console.log(age);
    console.log(weight);
}
fnWithMiltiArgs('Alice', 20, "50kg");

const multiply = (num) => num ** 2;
console.log(multiply(2));
console.log(multiply(10));