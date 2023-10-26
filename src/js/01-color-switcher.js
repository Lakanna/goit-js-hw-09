
const elements = {
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
    body: document.querySelector('body'),
};

let timerId = null;

elements.btnStop.disabled = true;

elements.btnStart.addEventListener('click', handlerStart);
elements.btnStop.addEventListener('click', handlerStop);


function handlerStart() {
    if (!elements.btnStop.disabled) {
    return;
    };
    
    elements.btnStart.disabled = true;
    elements.btnStop.disabled = false;
    timerId = setInterval(getColor, 1000);
    };

function getColor() {
   
    const currentColor = getRandomHexColor();
    console.log(currentColor);
    elements.body.style.backgroundColor = currentColor;
    
};

function handlerStop() {

    clearInterval(timerId);

    elements.btnStart.disabled = false;
    elements.btnStop.disabled = true;
};

function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };