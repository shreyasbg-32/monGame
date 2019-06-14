var canvas,ctx;
window.onload=function init() {
    canvas=document.querySelector("#myCanvas");
    ctx =canvas.getContext('2d');
    ctx.fillStyle='red';
    ctx.fillRect(10,30,50,50);
    ctx.strokeStyle='green';
    ctx.lineWidth=6;
    ctx.strokeRect(100,40,50,40);
    ctx.beginPath();
    ctx.arc(80,160,10,0,2*Math.PI);
    ctx.fill();

    ctx.fillStyle="purple";
    ctx.font="20px Arial";
    ctx.fillText("Hello!",60,20);
}