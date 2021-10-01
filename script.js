const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500;
const WIDTH = 20;
const HEIGHT = SQUARES / WIDTH;


const container = document.getElementById("container");

let activeIndex = 217;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add("square");

    // on mouseover, add randomcolor
    square.addEventListener('mouseover', () => setColor(square));
    // on mouseout, remove color
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[ randomIndex ];
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #1d1d1d, 0 0 10px #1d1d1d`;
}

function clear() {
    const squares = document.getElementsByClassName("square");
    for (let square of squares) {
        removeColor(square);
    }
}

function blink() {
    const squares = document.getElementsByClassName("square");
    for (let square of squares) {
        setTimeout( () => setColor(square), 100);
        setTimeout( () => removeColor(square), 1000);
    }
}

function getSquareByIndex(index) {
    const squares = document.getElementsByClassName("square")
    return squares[index];
}

document.addEventListener('keypress', function(event) {
    if (event.code === "Space") {
        clear();
    }

    if (event.code === "Enter") {
        blink();
    }

    if (event.key == 'a') {
        activeIndex = activeIndex - 1;
        if (activeIndex % WIDTH === (WIDTH - 1)) {
            activeIndex += WIDTH;
        }
        setColor(getSquareByIndex(activeIndex));
    }
    if (event.key == 'w') {
        activeIndex = activeIndex - WIDTH;
        if (activeIndex <= 0) {
            activeIndex += (HEIGHT * WIDTH);
        }
        setColor(getSquareByIndex(activeIndex));
    }
    if (event.key == 's') {
        activeIndex = activeIndex + WIDTH;
        if (activeIndex >= (HEIGHT * WIDTH)) {
            activeIndex -= (HEIGHT * WIDTH);
        }
        setColor(getSquareByIndex(activeIndex));
    }
    if (event.key == 'd') {
        activeIndex = activeIndex + 1;
        if (activeIndex % WIDTH === 0) {
            activeIndex -= WIDTH;
        }
        setColor(getSquareByIndex(activeIndex));
    }

});

const left = document.getElementById("left");
left.addEventListener('click', function(event) {
    activeIndex = activeIndex - 1;
    if (activeIndex % WIDTH === (WIDTH - 1)) {
        activeIndex += WIDTH;
    }
    setColor(getSquareByIndex(activeIndex));
});

const up = document.getElementById("up");
up.addEventListener('click', function(event) {
    activeIndex = activeIndex - WIDTH;
    if (activeIndex <= 0) {
        activeIndex += (HEIGHT * WIDTH);
    }
    setColor(getSquareByIndex(activeIndex));
});

const down = document.getElementById("down");
down.addEventListener('click', function(event) {
    activeIndex = activeIndex + WIDTH;
    if (activeIndex >= (HEIGHT * WIDTH)) {
        activeIndex -= (HEIGHT * WIDTH);
    }
    setColor(getSquareByIndex(activeIndex));
});

const right = document.getElementById("right");
right.addEventListener('click', function(event) {
    activeIndex = activeIndex + 1;
    if (activeIndex % WIDTH === 0) {
        activeIndex -= WIDTH;
    }
    setColor(getSquareByIndex(activeIndex));
});

const clearScreen = document.getElementById("clear");
clearScreen.addEventListener('click', function(event) {
    clear();
});