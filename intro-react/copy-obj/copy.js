const blog = {
    title: "title",
    content: "content",
};

const copyBlog = {
    ...blog,
};

blog.title = "blog title";
console.log(copyBlog); // title