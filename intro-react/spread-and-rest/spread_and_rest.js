const arr = [33, 675, 900];
const newArr = [...arr, 88, 160];
console.log(newArr); // [ 33, 675, 900, 88, 160 ]

const filter = (...nums) => {
    return nums.filter(el => {
        return el % 2 == 0;
    });
}
console.log(filter(33, 675, 900, 88, 160));

const person = {
    name: "Alice",
    age: 20,
}

const programmer = {
    ...person,
    programming: "JavaScript",
}
// { name: 'Alice', age: 20, programming: 'JavaScript' }
console.log(programmer);