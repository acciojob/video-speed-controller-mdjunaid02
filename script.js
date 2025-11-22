const video=document.querySelector(".viewer");
const toggle=document.querySelector(".player__button.toggle");
const progress=document.querySelector(".progress");
const progressBar=document.querySelector(".progress__filled");
const volume=document.querySelector('input[name="volume"]');
const playBack=document.querySelector('input[name="playbackRate"]');
const skipButton=document.querySelectorAll('.skip');

function togglePlay(){
	video.paused ? video.play() : video.pause();
}
function updateButton(){
	toggle.textContent=video ? '►': '❚❚';
}
toggle.addEventListener('click',togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

video.addEventListener('timeupdate',()=>{
	
});