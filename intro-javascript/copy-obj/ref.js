const myobj = {
    title: "title",
};

const refObj = myobj;
myobj.title = "updated title";

console.log(refObj.title); // updated title
