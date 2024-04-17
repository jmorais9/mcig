let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let audios = [audio1, audio2];

let play = document.getElementById('play');
let pular = document.getElementById('pular');

let i = 0;
play.addEventListener('click', function(event){
    if(audios[i].paused) {
        audios[i].play();
        play.src = 'pause.png';
    }else {
        audios[i].pause();
        play.src = 'play.png';
    }
    audios[i].addEventListener('ended', function(event){
        i++;
        if (i >= audios.length) {
            i = 0; 
        }
        audios[i].play();
    });
})

pular.addEventListener('click', function(event){
    audios[i].pause();
    i++; 
    if (i >= audios.length) {
        i = 0; 
    }
    audios[i].currentTime = 0;
    audios[i].play();
});