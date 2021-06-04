canvas = document.getElementById("myCanvas");
var mouseEvent = "";
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 2;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
   mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of X and Y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
}