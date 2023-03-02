let blogPosts = []

var add_blog_button = document.getElementById("add_blog_button");
var delete_blog_button = document.getElementById("delete_blog_button");
var update_blog_button = document.getElementById("update_blog_button");

const dateOBJ = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var blog_list = document.getElementById("blog_list");

// check if there is any data in local storage
if (localStorage.getItem("blogPosts")) {
    blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
} else {
    blogPosts = [
        { title: "First post", content: "This is my first blog post.", date: "1 March 2023"},
        { title: "Second post", content: "This is my second blog post.", date: "1 March 2023" }
    ];

    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

// pre-populate the list
for (let i = 0; i < blogPosts.length; i++) {
    let post = blogPosts[i];

    const listItem = document.createElement("li");

    const heading = document.createElement("h3");
    heading.textContent = post.title;
    const content = document.createElement("p");
    content.textContent = post.content;
    const date = document.createElement("span");
    date.textContent = post.date;

    listItem.appendChild(heading);
    listItem.appendChild(content);
    listItem.appendChild(date);

    blog_list.appendChild(listItem);
}

// add event listeners
add_blog_button.addEventListener("click", () => {
    setTimeout(() => {
        var title = document.getElementById("blog_title").value;
        var content = document.getElementById("blog_content").value;
        var date = dateOBJ.getDate() + " " + months[dateOBJ.getMonth()] + " " + dateOBJ.getFullYear();

        var blogPost = { title: title, content: content, date: date };

        blogPosts.push(blogPost);

        localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

        // adding new element
        const listItem = document.createElement("li");

        const headingElem = document.createElement("h3");
        headingElem.textContent = title;
        const contentElem = document.createElement("p");
        contentElem.textContent = content;
        const dateElem = document.createElement("span");
        dateElem.textContent = date;

        listItem.appendChild(headingElem);
        listItem.appendChild(contentElem);
        listItem.appendChild(dateElem);

        blog_list.appendChild(listItem);
    }, 10);
});

// delete event listeners
delete_blog_button.addEventListener("click", () => {
    setTimeout(() => {
        var id = document.getElementById("blog_id").value;
        for (let i = 0; i < blogPosts.length; i++) {
            if (i == id - 1) {
                blogPosts.splice(i, 1);
                break;
            }
        }
        
        localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

        // remove element
        const listItems = document.querySelectorAll("li");
        for (let i = 0; i < listItems.length; i++) {
            if (i == id - 1) {
                listItems[i].remove();
            }
        }
    }, 10);
});

// update event listeners
update_blog_button.addEventListener("click", () => {
    setTimeout(() => {
        var id = document.getElementById("blog_id_2").value;
        var title = document.getElementById("blog_title_2").value;
        var content = document.getElementById("blog_content_2").value;
        var date = dateOBJ.getDate() + " " + months[dateOBJ.getMonth()] + " " + dateOBJ.getFullYear();

        for (let i = 0; i < blogPosts.length; i++) {
            if (i == id - 1) {
                blogPosts[i].title = title;
                blogPosts[i].content = content;
                blogPosts[i].date = date;
            }
        }

        localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

        // update element
        const listItems = document.querySelectorAll("li");
        for (let i = 0; i < listItems.length; i++) {
            if (i == id - 1) {
                listItems[i].children[0].textContent = title;
                listItems[i].children[1].textContent = content;
                listItems[i].children[2].textContent = date;
            }
        }
    }, 10);
});