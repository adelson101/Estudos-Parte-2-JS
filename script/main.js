const botao = document.querySelectorAll('button.tecla');
for (let i in botao) {
     botao[i].onclick = () => document.querySelector(`#som_${botao[i].classList[1]}`).play();
     botao[i].onkeydown = (e) => {
        if (e.code=='Enter' || e.code=='Space') {
            botao[i].classList.add('ativa');
        }
    } 
     botao[i].onkeyup = () => botao[i].classList.remove('ativa');
    }


    