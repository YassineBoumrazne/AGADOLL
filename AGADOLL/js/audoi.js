
const first__audio = document.querySelector('.first__audio')
const second__audio = document.querySelector('.second__audio')
const third__audio = document.querySelector('.third__audio')

const first__btn = document.querySelector('.play__first__audio')
const second__btn = document.querySelector('.play__second__audio')
const third__btn = document.querySelector('.play__third__audio')


var state = false;
var curAudio,curIndex=0;

function pIcon(index){
		firstSpan[index].classList.toggle('active');
		secondSpan[index].classList.toggle('active');
}

function p(audio,index) {
	if(state==false){
		state=true;
		curIndex=index;
		curAudio=audio;
		pIcon(index);
		audio.play();
	}
	else{
		if(curAudio==audio){
			state=false;
			audio.pause();
			pIcon(index);
		}
		else{
			state=true;
			curAudio.pause();
			pIcon(curIndex);
			curIndex=index;
			curAudio=audio;
			pIcon(index);
			audio.play();
		}
	}

	curAudio.onended = function() {
		state=false;
		pIcon(curIndex);
	}
  }
 
first__btn.onclick = () => {
    p(first__audio,0);
}

second__btn.onclick = () => {
   p(second__audio,1);
}

third__btn.onclick = () => {
  p(third__audio,2);
}

/*--------------------------------------*/

const firstSpan = document.querySelectorAll('.first__line');
const secondSpan = document.querySelectorAll('.second__line');
const play = document.querySelectorAll('.play');
