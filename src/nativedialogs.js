// acquire elements
var alert_button = document.getElementById("alert_button");
var confirm_button = document.getElementById("confirm_button");
var prompt_button = document.getElementById("prompt_button");
var safer_prompt_button = document.getElementById("safer_prompt_button");

var output = document.getElementById("output");

// add event listeners
alert_button.addEventListener("click", () => {
    alert("Alert pressed!");
});

confirm_button.addEventListener("click", () => {
    setTimeout(() => {
        var confirmed = window.confirm("Do you confirm this?");
        output.innerHTML = `The value returned by the confirm method is : (${confirmed})`;
    }, 10);
});

prompt_button.addEventListener("click", () => {
    setTimeout(() => {
        var userInput = window.prompt("Please enter your name");
        if (userInput === null || userInput === "") {
            output.innerHTML = "User didn't enter anything";
        } else {
            output.innerHTML = `${userInput}`;
        }
    }, 10);
});

safer_prompt_button.addEventListener("click", function() {
    setTimeout(() => {
        const userInput = window.prompt("Please enter your name");
        if (userInput === null || userInput === "") {
            output.innerHTML = "User didn't enter anything";
        } else {
            const sanitizedUserInput = DOMPurify.sanitize(userInput);
            const template = `${sanitizedUserInput}`;
            output.innerHTML = template;
        }
    }, 10);
});