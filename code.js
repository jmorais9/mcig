let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');
let video3 = document.getElementById('video3');
const videos =[video1, video2, video3];

let start= document.getElementById('start');

let play= document.getElementById('play');
let expandir= document.getElementById('expandir');
let diminuir= document.getElementById('diminuir');
for (const video of videos) {
    video.addEventListener('click', function(event) {
        start.src = video.src;
        start.play();
        play.src = 'pause.png';
    });
}

    play.addEventListener('click', function(event) {
        if(start.paused){
        start.play();
        play.src = 'pause.png';
        }else{
            start.pause();
            play.src = 'play.png';
        }
    });

    expandir.addEventListener('click', function(event) {
        start.style.transform = 'scale(1.1)';
    });

    diminuir.addEventListener('click', function(event) {
        if(start.style.transform == 'scale(1.1)'){
            start.style.transform = 'scale(1)';  
        }else {
            start.style.transform = 'scale(0.8)';
        }
    });
    
