(function(){
const oldImg = document.getElementById("faputaball");
if(!oldImg){
let img = document.createElement("img");
let imgProps = {
src: "https://raw.githubusercontent.com/RyderTheApple/Rays-Bookmarklets/refs/heads/main/faputaball.png",
w:100,
h:100,
x: (window.innerWidth-100)/2,
y: (window.innerHeight-100)/2,
vx: 2,
vy: 2,
angle: 0,
va: -2
};
img.src = imgProps.src;
img.setAttribute('id',"faputaball");
img.width = imgProps.w;
img.height = imgProps.h;
img.style.position="fixed";
img.style.zIndex="9999";
function loop(){
imgProps.x +=imgProps.vx;
imgProps.y +=imgProps.vy;
imgProps.angle +=imgProps.va;
if(imgProps.x > window.innerWidth-imgProps.w||imgProps.x<0){
imgProps.vx*=-1;
imgProps.va*=-1;
}
if(imgProps.y > window.innerHeight-imgProps.h||imgProps.y<0){
imgProps.vy*=-1;
imgProps.va*=-1;
}
img.style.top=`${imgProps.y}px`;
img.style.left=`${imgProps.x}px`;
img.style.rotate =`${imgProps.angle}deg`;
document.body.appendChild(img);
requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
}
})();
