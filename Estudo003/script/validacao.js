const NumeroAleatorioUi = document.querySelector('#Numero-Secreto');

function verificarChuteValido(chute){
    const numer = +chute;
    if (ChuteForInvalido(numer)){
        ElementoChute.innerHTML += '<div>Valor Invalido</div>';
        return
    }

    if (numeroForMaiorValor(numer)) {
        ElementoChute.innerHTML += `<div>Numero Secreto deve estar entre ${MenorValor} e ${MaiorValor}</div>`;
        return
    }

    if (numer == NumeroSecreto){
        document.body.innerHTML = `<h2>Você acertou!</h2><h3>O número secreto era ${NumeroSecreto}</h3><button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
        recognition.stop();
    } else if (NumeroSecreto>numer) {
        ElementoChute.innerHTML += `<div>Numero Secreto é maior <i class="fa-solid fa-up-long"></i><div>`
    } else {
        ElementoChute.innerHTML += `<div>Numero Secreto é menor <i class="fa-solid fa-down-long"></i><div>`
    }
}

function ChuteForInvalido(numer) {
    return Number.isNaN(numer);
}

function numeroForMaiorValor(numer) {
    return numer > MaiorValor || numer < MenorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id=='jogar-novamente'){
        window.location.reload();
    }
})