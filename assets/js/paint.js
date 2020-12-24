let canvas = document.getElementById('draw');
let clearButton = document.getElementById('clear');
let colorInput = document.getElementById('color');
let sizeInput = document.getElementById('size');
let sizeIndicator = document.getElementById('sizeIndicator');
context = canvas.getContext("2d");

let color = '#df4b26';
let size = 5;

//добавляем обработчики на события мыши

let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;
let mouseX;
let mouseY;

//specific only for this layout

let offsetLeft = canvas.parentElement.parentElement.offsetLeft;
let offsetTop = canvas.parentElement.parentElement.offsetTop;
canvas.addEventListener('mousedown', function (e) {
    mouseX = e.pageX - this.offsetLeft - offsetLeft;
    mouseY = e.pageY - this.offsetTop - offsetTop;
    paint = true;
    addClick(mouseX, mouseY);
    redraw();
});

canvas.addEventListener('mousemove', function (e) {
    if (paint) {
        addClick(e.pageX - this.offsetLeft - offsetLeft, e.pageY - this.offsetTop - offsetTop, true);
        redraw();
    }
});

canvas.addEventListener('mouseup', function (e) {
    paint = false;
});

canvas.addEventListener('mouseleave', function (e) {
    paint = false;
});

clearButton.addEventListener('click', clearCanvas);

colorInput.addEventListener('input', ()=>{
    color = colorInput.value;
})

sizeInput.addEventListener('input', ()=>{
    size = sizeInput.value;
    sizeIndicator.innerHTML = size;
})

//И собственно рисуем:

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    context.strokeStyle = color;
    context.lineJoin = "round";
    context.lineWidth = size;

    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }

        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }

}

function clearCanvas() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    clickX = [];
    clickY = [];
    clickDrag = [];
}
