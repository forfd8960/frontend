const arr = [33, 675, 900];
const newArr = [...arr, 88, 160];
console.log(newArr); // [ 33, 675, 900, 88, 160 ]

const sortNums = (...nums) => {
    return nums.sort();
}
console.log(sortNums(33, 675, 900, 88, 160));

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