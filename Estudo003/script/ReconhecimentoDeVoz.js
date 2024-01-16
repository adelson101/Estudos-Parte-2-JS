const ElementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    let chute = e.results[0][0].transcript;
    console.log(chute);
    exibeChuteNaTela(Number(chute));
    verificarChuteValido(chute);
}

function exibeChuteNaTela(chute) {
    ElementoChute.innerHTML = `<div>Você disse:</div> <span class="box">${chute}</span>`;
}

recognition.addEventListener('end', () => recognition.start());