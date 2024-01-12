import { NumeroAleatorio } from "./SortearNumero.js";

const Botao = document.querySelector('.box');
const NumeroAleatorioUi = document.querySelector('#Numero-Secreto');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;



Botao.addEventListener('mouseenter', () => {
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-br';
    recognition.start();

    recognition.addEventListener('result', (e) => {

        let Valor = e.results[0][0].transcript;
        Botao.innerHTML = Number(Valor);

            if (Valor>NumeroAleatorio()) {
                NumeroAleatorioUi.innerHTML = 'O número secreto é maior <i class="fa-solid fa-arrow-up"></i>';
            }else if (Valor<NumeroAleatorio()) {
                NumeroAleatorioUi.innerHTML = 'O número secreto é menor <i class="fa-solid fa-arrow-down"></i>';
            }

    });

});