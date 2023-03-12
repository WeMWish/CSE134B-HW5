class ButtonCount extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({mode: 'open'});

        // Create a button
        let counter = 0;
        const button = document.createElement('button');
        button.textContent = 'Times clicked: ' + counter;

        // Add an event listener to the button
        button.addEventListener('click', () => {
            counter++;
            button.textContent = 'Times clicked: ' + counter;
        });

        // wrap the button and the span in a div, and append it to the shadow root
        const wrapper = document.createElement('div');
        wrapper.appendChild(button);
        this.shadowRoot.appendChild(wrapper);
    }
}

// define the cutstom element
customElements.define('button-count', ButtonCount);