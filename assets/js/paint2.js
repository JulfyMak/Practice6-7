window.addEventListener("load", function onWindowLoad() {
    let canvas = document.getElementById("canvas");
    let clearButton2 = document.getElementById("clear2");
    let colorInput2 = document.getElementById('color2');
    let sizeInput2 = document.getElementById('size2');
    let sizeIndicator2 = document.getElementById('sizeIndicator2');
    let context = canvas.getContext("2d");

    context.lineCap = "round";
    context.lineWidth = 5;

    clearButton2.addEventListener('click', ()=>{
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    colorInput2.addEventListener('input', ()=>{
       context.strokeStyle = colorInput2.value;
    });

    sizeInput2.addEventListener('input', ()=>{
        context.lineWidth = sizeInput2.value;
        sizeIndicator2.innerHTML = sizeInput2.value;
    })



    canvas.onmousemove = function drawIfPressed (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        let dx = e.movementX;
        let dy = e.movementY;

        if (e.buttons > 0) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - dx, y - dy);
            context.stroke();
            context.closePath();
        }
    };

});
