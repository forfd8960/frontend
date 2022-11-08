const friuts = ["Apple", "Grape", "Orange"];
console.log(friuts);

[apple, grape, orange] = friuts
console.log(apple);
console.log(grape);
console.log(orange);
/*
["Apple", "Grape", "Orange"]
"Apple"
"Grape"
"Orange"
*/

const numbers = [8, 9, 6];
[eight, , six] = numbers
console.log(eight);
console.log(six);
/*
8
6
*/

/*
This is a blog 
 awesome blog
view:  88
likes: 1000
*/
const blog = {
    title: "This is a blog",
    content: "awesome blog",
    view: 88,
    likes: 1000,
};
console.log("blog: ", blog);

const {title, content} = blog;
console.log(title, "\n", content);

const {view, likes} = blog;
console.log("view: ", view + "\n"+"likes: "+likes);