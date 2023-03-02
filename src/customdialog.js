// acquire elements
var custom_alert_button = document.getElementById("custom_alert_button");
var custom_confirm_button = document.getElementById("custom_confirm_button");
var custom_prompt_button = document.getElementById("custom_prompt_button");
var custom_safer_prompt_button = document.getElementById("custom_safer_prompt_button");

var custom_alert_dialog = document.getElementById("custom_alert_dialog");
var custom_confirm_dialog = document.getElementById("custom_confirm_dialog");
var custom_prompt_dialog = document.getElementById("custom_prompt_dialog");
var custom_safer_prompt_dialog = document.getElementById("custom_safer_prompt_dialog");

var output = document.getElementById("output");

window.addEventListener("click", function(event) {
    const dialog = document.getElementById("custom-alert-dialog");
    if (event.target == dialog) {
        dialog.close();
    }
});

// add event listeners
custom_alert_button.addEventListener("click", () => {
    setTimeout(() => {
        custom_alert_dialog.innerHTML = `<p id="echo"></p> <button id="close_button">ok</button>`;
        var echo = document.getElementById("echo");
        var close_button = document.getElementById("close_button");
        echo.innerHTML = "Alert pressed!";
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
        custom_confirm_dialog.innerHTML = `<p>Do you confirm this?</p> <br> <button id="cancel_button">Cancel</button> <button id="ok_button">OK</button>`;
        var cancel_button = document.getElementById("cancel_button");
        var ok_button = document.getElementById("ok_button");
        cancel_button.addEventListener("click", () => {
            setTimeout(() => {
                output.innerHTML = "The value returned by the confirm method is : (false)";
                custom_confirm_dialog.innerHTML = "";
                custom_confirm_dialog.close();
            }, 10);
        });
        ok_button.addEventListener("click", () => {
            setTimeout(() => {
                output.innerHTML = "The value returned by the confirm method is : (true)";
                custom_confirm_dialog.innerHTML = "";
                custom_confirm_dialog.close();
            }, 10);
        });
        custom_confirm_dialog.showModal();
    }, 10);
});

custom_prompt_button.addEventListener("click", () => {
    setTimeout(() => {
        custom_prompt_dialog.innerHTML = `<p>What is your name?</p> <input type="text" id="input"> <br> <button id="cancel_button">Cancel</button> <button id="ok_button">OK</button>`;
        var input = document.getElementById("input");
        var cancel_button = document.getElementById("cancel_button");
        var ok_button = document.getElementById("ok_button");
        cancel_button.addEventListener("click", () => {
            setTimeout(() => {
                output.innerHTML = "User didn't enter anything";
                custom_prompt_dialog.innerHTML = "";
                custom_prompt_dialog.close();
            }, 10);
        });
        ok_button.addEventListener("click", () => {
            setTimeout(() => {
                output.innerHTML = `${input.value}`;
                custom_prompt_dialog.innerHTML = "";
                custom_prompt_dialog.close();
            }, 10);
        });
        custom_prompt_dialog.showModal();
    }, 10);
});

custom_safer_prompt_button.addEventListener("click", () => {
    setTimeout(() => {
        custom_safer_prompt_dialog.innerHTML = `<p>What is your name</p> <input type="text" id="input"> <br> <button id="cancel_button">Cancel</button> <button id="ok_button">OK</button>`;
        var input = document.getElementById("input");
        var cancel_button = document.getElementById("cancel_button");
        var ok_button = document.getElementById("ok_button");
        cancel_button.addEventListener("click", () => {
            setTimeout(() => {
                output.innerHTML = "User didn't enter anything";
                custom_safer_prompt_dialog.innerHTML = "";
                custom_safer_prompt_dialog.close();
            }, 10);
        });
        ok_button.addEventListener("click", () => {
            setTimeout(() => {
                const sanitizedUserInput = DOMPurify.sanitize(input.value);
                const template = `
                    ${sanitizedUserInput}
                `;
                output.innerHTML = template;
                custom_safer_prompt_dialog.innerHTML = "";
                custom_safer_prompt_dialog.close();
            }, 10);
        });
        custom_safer_prompt_dialog.showModal();
    }, 10);
});