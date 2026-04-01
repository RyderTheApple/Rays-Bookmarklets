(function(){

const oldImg = document.getElementById("shuckygif");
const oldAudio = document.getElementById("shuckysound");
if(!oldImg){
const shucks = document.createElement('img');
const audio = document.createElement('audio');
const shucksimg = shucks.style;
shucks.setAttribute('id', "shuckygif");
audio.setAttribute('id','shuckysound');
shucks.setAttribute('src','https://github.com/RyderTheApple/Rays-Bookmarklets/blob/main/shuckscribe.gif?raw=true');
shucksimg.position ='fixed';
shucksimg.maxWidth="100%";
shucksimg.height="auto";
shucksimg.bottom ='1px';
shucksimg.zIndex ='9999';
audio.setAttribute('src','https://github.com/RyderTheApple/Rays-Bookmarklets/raw/refs/heads/main/likebell2.mp3');
audio.addEventListener('canplaythrough',()=>{
document.body.appendChild(shucks);
document.body.appendChild(audio);
audio.play();
setTimeout(()=>{
    shucks.remove();
}, 3480);
setTimeout(()=>{
    audio.remove();
    window.location.reload();
},4000);
});
}
})();
