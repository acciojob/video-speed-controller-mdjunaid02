const video=document.querySelector(".player__video");
const toggle=document.querySelector(".player__button.toggle");
const progress=document.querySelector(".progress");
const progressBar=document.querySelector(".progress__filled");
const volume=document.querySelector('input[name="volume"]');
const playBack=document.querySelector('input[name="playbackRate"]');
const skipButtons=document.querySelectorAll('.skip');

function togglePlay(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
}

function updateButton(){
	const icon=video.pause ? "►" : "❚ ❚";
	toggle.textContent=icon;
}

function handleProgress(){
	const percent=(video.currentTime/video.duration)*100;
	progressBar.style.width=percent+'%';
}

function scrub(e){
	const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
	video.currentTime=scrubTime;
}

function handleVolume(){
	video.volume=volume.value;
}

function handlePlaybackRate(){
	video.playbackRate=playbackRate.value;
}
function skip(){
	video.currentTime+=parseFloat(this.dataset.skip);
}

video.addEventListener("click",togglePlay);
video.addEventListener("play",updateButton);
video.addEventListener("pause",updateButton);
video.addEventListener("timeupdate",handleProgress);

toggle.addEventListener("click",togglePlay);
skipButton.forEach(button=> button.addEventListener('click',.skip));
volume.addEventListener('input',handleVolume);
progress.addEventListener('input',handlePlaybackRate);
progress.addEventListener("click",scrub);