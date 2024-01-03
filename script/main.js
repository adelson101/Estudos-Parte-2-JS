    const botao = document.querySelectorAll('button.tecla');
    for (let i in botao) { botao[i].onclick = () => document.querySelector(`#som_${botao[i].classList[1]}`).play() ; }