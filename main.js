var mouse_event="empty";
var last_position_x,last_position_y;



var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var color="skyblue";
var width=2;
canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("line_width").value;
    mouse_event="mouseDown";


}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_x,last_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();

    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;


}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    
    mouse_event="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    
    mouse_event="mouseleave";
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

var last_position_x,last_position_y;
var color="black";
var width=10;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var screen_width=screen.width;
var newWidth=screen.width-70;
var newHeight=screen.height-300;


if(screen_width<992){
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
    document.body.style.overflow="hidden";
    
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("colour").value;
    width=document.getElementById("width").value;
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=etouches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    current_position_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
    last_position_x=current_position_x;
    last_position_y=current_position_y;
    

}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
var last_position_x,last_position_y;
var color="black";
var width=10;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var screen_width=screen.width;
var newWidth=screen.width-70;
var newHeight=screen.height-300;


if(screen_width<992){
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
    document.body.style.overflow="hidden";
    
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    color=document.getElementById("colour").value;
    width=document.getElementById("width").value;
    last_position_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_y=etouches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    current_position_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
    last_position_x=current_position_x;
    last_position_y=current_position_y;
    

}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

