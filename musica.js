let audio = document.getElementById('audio');
let play = document.getElementById('play');
let icone = document.getElementById('icone');
let replay = document.getElementById('replay');
let temporizador = document.getElementById('range');
let tempos = document.getElementById('tempo');

play.addEventListener('click', function(event){
    if(audio.paused){
        audio.play();
        play.src = 'pause.png';
        
    } else {
        audio.pause();
        play.src = 'play.png';
    }
});

replay.addEventListener('click', function(event){
    audio.currentTime = 0;
    audio.play();
});
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    tempos.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function atualizaBarra() {
    let tempo = audio.currentTime;
    let duracao = audio.duration;

    let progresso = (tempo/duracao) * 100;
    temporizador.value = progresso;
    formatTime(tempo);
}

function atualizaTempo(){
    let progresso2 = temporizador.value;
    let duracao2 = audio.duration;
    let currentTime = (progresso2 /100) * duracao2;

    audio.currentTime = currentTime;
  
}

audio.addEventListener('timeupdate', atualizaBarra);
range.addEventListener('input', atualizaTempo);