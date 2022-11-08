class Person {
    name = 'John'
    call = () => {
        console.log("Call person");
    }
}

p = new Person();
console.log(p.name);
console.log(p.call());