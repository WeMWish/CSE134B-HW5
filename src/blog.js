/* local storage */
// local storage javascript array
var local_storage_blogs = [
    { "id": 0, "title": "Blog 1", "summary": "Blog 1 summary", "date": "2023-03-01" },
    { "id": 1, "title": "Blog 2", "summary": "Blog 2 summary", "date": "2023-03-02" },
];

/* elements */
// the list element on the website
var blog_list = document.getElementById("blog_list");

var add_dialog = document.getElementById("add_dialog");
var add_title = document.getElementById("add_title");
var add_summary = document.getElementById("add_summary");
var add_date = document.getElementById("add_date");
var add_button = document.getElementById("add_button");
var add_cancel_button = document.getElementById("add_cancel_button");

var edit_dialog = document.getElementById("edit_dialog");
var edit_title = document.getElementById("edit_title");
var edit_summary = document.getElementById("edit_summary");
var edit_date = document.getElementById("edit_date");
var edit_button = document.getElementById("edit_button");
var edit_cancel_button = document.getElementById("edit_cancel_button");

var delete_dialog = document.getElementById("delete_dialog");
var delete_button = document.getElementById("delete_button");
var delete_cancel_button = document.getElementById("delete_cancel_button");

var add_blog_button = document.getElementById("add_blog_button");

/* init operations */
// check if local storage exists
if (localStorage.getItem("local_storage_blogs") === null) {
    // if not, create it
    localStorage.setItem("local_storage_blogs", JSON.stringify(local_storage_blogs));
} else {
    // if it does, load it
    local_storage_blogs = JSON.parse(localStorage.getItem("local_storage_blogs"));
}

// prepopulate the list with local storage
for (var i = 0; i < local_storage_blogs.length; i++) {
    var blog = local_storage_blogs[i];
    add_blog(blog);
}

/* functions */
// add blog function
function add_blog(blog) {
    // add to the list
    var list_item = document.createElement("li");
    var blog_title = document.createElement("h2");
    var blog_summary = document.createElement("p");
    var blog_date = document.createElement("p");
    var delete_blog_button = document.createElement("button");
    var edit_blog_button = document.createElement("button");

    blog_title.innerHTML = blog.title;
    blog_summary.innerHTML = blog.summary;
    blog_date.innerHTML = blog.date;
    delete_blog_button.innerHTML = "Delete";
    edit_blog_button.innerHTML = "Edit";
    delete_blog_button.addEventListener("click", function() {
        delete_dialog.showModal();
        handle_delete_blog(blog.id);
    });
    edit_blog_button.addEventListener("click", function() {
        edit_dialog.showModal();
        handle_edit_blog(blog.id);
    });

    list_item.appendChild(blog_title);
    list_item.appendChild(blog_summary);
    list_item.appendChild(blog_date);
    list_item.appendChild(delete_blog_button);
    list_item.appendChild(edit_blog_button);

    blog_list.appendChild(list_item);
}

/* event listeners */
// add-dialog and add-button
add_blog_button.addEventListener("click", function() {
    add_dialog.showModal();
});

add_button.addEventListener("click", function() {
    let id = local_storage_blogs.length == 0 ? 0 : local_storage_blogs[local_storage_blogs.length - 1].id + 1;
    var blog = {
        "id": id,
        "title": add_title.value,
        "summary": add_summary.value,
        "date": add_date.value,
    };
    local_storage_blogs.push(blog);
    localStorage.setItem("local_storage_blogs", JSON.stringify(local_storage_blogs));
    add_blog(blog);
    add_dialog.close();
});

add_cancel_button.addEventListener("click", function() {
    add_dialog.close();
});

function handle_delete_blog(id) {
    delete_button.addEventListener("click", function() {
        for (var i = 0; i < local_storage_blogs.length; i++) {
            if (local_storage_blogs[i].id == id) {
                local_storage_blogs.splice(i, 1);
                localStorage.setItem("local_storage_blogs", JSON.stringify(local_storage_blogs));
                location.reload();
            }
        }
    });

    delete_cancel_button.addEventListener("click", function() {
        delete_dialog.close();
    });
}

function handle_edit_blog(id) {
    for (var i = 0; i < local_storage_blogs.length; i++) {
        if (local_storage_blogs[i].id == id) {
            edit_title.value = local_storage_blogs[i].title;
            edit_summary.value = local_storage_blogs[i].summary;
            edit_date.value = local_storage_blogs[i].date;
        }
    }

    edit_button.addEventListener("click", function() {
        for (var i = 0; i < local_storage_blogs.length; i++) {
            if (local_storage_blogs[i].id == id) {
                local_storage_blogs[i].title = edit_title.value;
                local_storage_blogs[i].summary = edit_summary.value;
                local_storage_blogs[i].date = edit_date.value;
                localStorage.setItem("local_storage_blogs", JSON.stringify(local_storage_blogs));
                location.reload();
            }
        }
    });

    edit_cancel_button.addEventListener("click", function() {
        edit_dialog.close();
    });
}