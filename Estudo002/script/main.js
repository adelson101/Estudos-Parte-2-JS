const botoes = document.querySelectorAll('ul.botoes-cronometro> li button');
const checkMusica = document.querySelector('#caixa-switch');
const music = new Audio('./sons/luna-rise-part-one.mp3');
music.currentTime = 2;
music.loop = true;
const BotaoVolume = document.querySelector('#volume');
const TempoTela = document.querySelector('.Tempo-cronometro');

const botaoTemporizador = document.querySelector('.BotaoFillDeg');

BotaoVolume.addEventListener('mouseup' , () => {
    music.volume = BotaoVolume.value*0.01;
})

checkMusica.addEventListener( ('change') , () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
} );

for (let i = 0; i < botoes.length; i++) {
    
    botoes[i].addEventListener( 'mouseup' , () => { 

        const texto = document.querySelector('.Box-banner h1');
         
        switch (i) {
            case 0:
                tempoDecoridoEmSeg = 1500;               
                alterarContexto('foco');
                botoes[i].classList.add('ativar-button');
                texto.innerHTML = "Otimize sua produtividade,<br><strong>mergulhe no que importa</strong>"; 
            break;
            case 1:
                tempoDecoridoEmSeg = 300;
                alterarContexto('descanso-curto');
                botoes[i].classList.add('ativar-button');
                texto.innerHTML = 'Que tal dar uma respirada?<br><strong> Faça uma pausa curta!</strong>';
            break;
            case 2:
                tempoDecoridoEmSeg = 900;
                alterarContexto('descanso-longo');
                botoes[i].classList.add('ativar-button');
                texto.innerHTML = 'Hora de voltar à superfície.<br><strong>Faça uma pausa longa.</strong>';
            break;
        }

    });
}

function alterarContexto(name) {
    mostrarTempo();
    botoes.forEach( (contexto) => {
        contexto.classList.remove('ativar-button');
    });    

    document.querySelector('div#Imagem-Foco').style.backgroundImage = `url("./image/${name}.svg`;
    document.querySelector('html').setAttribute('data-contexto', `${name}`);
}

let tempoDecoridoEmSeg = 1500;
let intervaloId = null;

mostrarTempo();

botaoTemporizador.addEventListener(("mouseup") , (IniciarOuPausar))

const ContagemRegressiva = () => {
    if (tempoDecoridoEmSeg<=0) {
        let EndAudio = new Audio('./sons/beep.mp3');
        EndAudio.play();
        botaoTemporizador.innerHTML = `<span class="material-symbols-outlined">pause</span>Terminou`;
        Zerar();
        return;
    }
    tempoDecoridoEmSeg -= 1;
    mostrarTempo();
}


function IniciarOuPausar() {
    
    if (intervaloId) {
        let PausaAudio = new Audio('./sons/pause.mp3');
        PausaAudio.play();
        Zerar();
        return;
    }

    let IniciarAudio = new Audio('./sons/play.wav');
    IniciarAudio.play();
    botaoTemporizador.innerHTML = `<span class="material-symbols-outlined">pause</span>Pausar`;
    intervaloId = setInterval(ContagemRegressiva, 1000)
}

function Zerar() {
    botaoTemporizador.innerHTML = `<span class="material-symbols-outlined">play_arrow</span>Começar`;
    clearInterval(intervaloId)
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecoridoEmSeg * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second : '2-digit'});
    TempoTela.innerHTML = `${tempoFormatado}`;
}
