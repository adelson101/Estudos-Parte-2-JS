
const Botao = document.querySelector('.box');

Botao.addEventListener('mouseenter', () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-br';
    recognition.start();
    console.log(recognition);
});

Botao.addEventListener('mouseexit', () => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-br';
    recognition.stop();
    console.log(recognition);
}) ;