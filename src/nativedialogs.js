// acquire elements
var alert_button = document.getElementById("alert_button");
var confirm_button = document.getElementById("confirm_button");
var prompt_button = document.getElementById("prompt_button");
var safer_prompt_button = document.getElementById("safer_prompt_button");

var confirm_output = document.getElementById("confirm_output");
var prompt_output = document.getElementById("prompt_output");

// add event listeners
alert_button.addEventListener("click", () => {
    alert("Hello, world!");
});

confirm_button.addEventListener("click", () => {
    setTimeout(() => {
        var confirmed = window.confirm("Are you sure?");
        confirm_output.textContent = `The value returned by the confirm method is : (${confirmed})`;
    }, 10);
});

prompt_button.addEventListener("click", () => {
    setTimeout(() => {
        var userInput = window.prompt("Please enter your name");
        if (userInput === null || userInput === "") {
            prompt_output.textContent = "User didn't enter anything";
        } else {
            prompt_output.textContent = `Hello, ${userInput}!`;
        }
    }, 10);
});

safer_prompt_button.addEventListener("click", function() {
    setTimeout(() => {
        const userInput = window.prompt("Please enter your name");
        if (userInput === null || userInput === "") {
            prompt_output.textContent = "User didn't enter anything";
        } else {
            const sanitizedUserInput = DOMPurify.sanitize(userInput);
            const template = `
                Hello, ${sanitizedUserInput}!<br>
                Your name has ${sanitizedUserInput.length} characters.
            `;
            prompt_output.innerHTML = template;
        }
    }, 10);
});