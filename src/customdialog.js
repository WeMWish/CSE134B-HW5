// acquire elements
var custom_alert_button = document.getElementById("custom_alert_button");
var custom_confirm_button = document.getElementById("custom_confirm_button");
var custom_prompt_button = document.getElementById("custom_prompt_button");
var custom_safer_prompt_button = document.getElementById("custom_safer_prompt_button");

var custom_alert_dialog = document.getElementById("custom_alert_dialog");
var custom_confirm_dialog = document.getElementById("custom_confirm_dialog");
var custom_prompt_dialog = document.getElementById("custom_prompt_dialog");
var custom_safer_prompt_dialog = document.getElementById("custom_safer_prompt_dialog");

window.addEventListener("click", function(event) {
    const dialog = document.getElementById("custom-alert-dialog");
    if (event.target == dialog) {
        dialog.close();
    }
});

// add event listeners
custom_alert_button.addEventListener("click", () => {
    setTimeout(() => {
        custom_alert_dialog.innerHTML = `<p id="echo"></p> <button id="close_button">close</button>`;
        var echo = document.getElementById("echo");
        var close_button = document.getElementById("close_button");
        echo.innerHTML = "Hello, world!";
        close_button.addEventListener("click", () => {
            setTimeout(() => {
                custom_alert_dialog.innerHTML = "";
                custom_alert_dialog.close();
            }, 10);
        });
        custom_alert_dialog.showModal();
    }, 10);
});

custom_confirm_button.addEventListener("click", () => {
    setTimeout(() => {
        custom_confirm_dialog.innerHTML = `<p id="echo"></p> <button id="cancel_button">Cancel</button> <button id="ok_button">OK</button> <br><br> <button id="close_button">close</button>`;
        var echo = document.getElementById("echo");
        var cancel_button = document.getElementById("cancel_button");
        var ok_button = document.getElementById("ok_button");
        var close_button = document.getElementById("close_button");
        echo.innerHTML = "Are you sure?";
        cancel_button.addEventListener("click", () => {
            setTimeout(() => {
                echo.innerHTML = "The value returned by the confirm method is : (false)";
            }, 10);
        });
        ok_button.addEventListener("click", () => {
            setTimeout(() => {
                echo.innerHTML = "The value returned by the confirm method is : (true)";
            }, 10);
        });
        close_button.addEventListener("click", () => {
            setTimeout(() => {
                custom_confirm_dialog.innerHTML = "";
                custom_confirm_dialog.close();
            }, 10);
        });
        custom_confirm_dialog.showModal();
    }, 10);
});

custom_prompt_button.addEventListener("click", () => {
    setTimeout(() => {
        custom_prompt_dialog.innerHTML = `<p id="echo"></p> <input type="text" id="input"> <button id="cancel_button">Cancel</button> <button id="ok_button">OK</button> <br><br> <button id="close_button">close</button>`;
        var echo = document.getElementById("echo");
        var input = document.getElementById("input");
        var cancel_button = document.getElementById("cancel_button");
        var ok_button = document.getElementById("ok_button");
        var close_button = document.getElementById("close_button");
        cancel_button.addEventListener("click", () => {
            setTimeout(() => {
                echo.innerHTML = "User didn't enter anything";
            }, 10);
        });
        ok_button.addEventListener("click", () => {
            setTimeout(() => {
                echo.innerHTML = `Hello, ${input.value}!`;
            }, 10);
        });
        close_button.addEventListener("click", () => {
            setTimeout(() => {
                custom_prompt_dialog.innerHTML = "";
                custom_prompt_dialog.close();
            }, 10);
        });
        custom_prompt_dialog.showModal();
    }, 10);
});

custom_safer_prompt_button.addEventListener("click", () => {
    setTimeout(() => {
        custom_safer_prompt_dialog.innerHTML = `<p id="echo"></p> <input type="text" id="input"> <button id="cancel_button">Cancel</button> <button id="ok_button">OK</button> <br><br> <button id="close_button">close</button>`;
        var echo = document.getElementById("echo");
        var input = document.getElementById("input");
        var cancel_button = document.getElementById("cancel_button");
        var ok_button = document.getElementById("ok_button");
        var close_button = document.getElementById("close_button");
        cancel_button.addEventListener("click", () => {
            setTimeout(() => {
                echo.innerHTML = "User didn't enter anything";
            }, 10);
        });
        ok_button.addEventListener("click", () => {
            setTimeout(() => {
                const sanitizedUserInput = DOMPurify.sanitize(input.value);
                const template = `
                    Hello, ${sanitizedUserInput}!<br>
                    Your name has ${sanitizedUserInput.length} characters.
                `;
                echo.innerHTML = template;
            }, 10);
        });
        close_button.addEventListener("click", () => {
            setTimeout(() => {
                custom_safer_prompt_dialog.innerHTML = "";
                custom_safer_prompt_dialog.close();
            }, 10);
        });
        custom_safer_prompt_dialog.showModal();
    }, 10);
});