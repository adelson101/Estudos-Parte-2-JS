const botoes = document.querySelectorAll('ul.botoes-cronometro> li button');
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = () => { 
        const Imagem = document.querySelector('div#Imagem-Foco');
        const texto = document.querySelector('.Box-banner h1');
        const html = document.querySelector('html');
        switch (i) {
            case 0:
                Imagem.style.backgroundImage = 'url("./image/foco.svg")';
                html.setAttribute('data-contexto','foco');
                texto.innerHTML = "Otimize sua produtividade,<br><strong>mergulhe no que importa</strong>";                
            break;
            case 1:
                Imagem.style.backgroundImage = 'url("./image/focoCurto.svg';
                html.setAttribute('data-contexto','descanso-curto');
                texto.innerHTML = 'Que tal dar uma respirada?<br><strong> Faça uma pausa curta!</strong>';
            break;
            case 2:
                Imagem.style.backgroundImage = 'url("./image/focoLongo.svg';
                html.setAttribute('data-contexto','descanso-longo');
                texto.innerHTML = 'Hora de voltar à superfície.<br><strong>Faça uma pausa longa.</strong>';
            break;
        }
        for(let I = 0; I < botoes.length ; I++){
            if (I==i) {
                botoes[I].classList.add('ativar-button');
            }else {
                botoes[I].classList.remove('ativar-button');
            }
        }
    };
}
function AdicionarTarefa() {

    const CriarTarefa = document.querySelector('ul.ListaDeTarefas');

    const BlocoTarefa = document.createElement('div');
    BlocoTarefa.classList.add('bloco-tarefa');
    BlocoTarefa.classList.add('adicionar');
    CriarTarefa.appendChild(BlocoTarefa);

    const divTop = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Adicionando tarefa';
    BlocoTarefa.appendChild(h1);
    
    const TextArea = document.createElement('textarea');
    TextArea.classList.add('Area-Tarefa');
    TextArea.placeholder = "No que você está trabalhando?";
    TextArea.cols = "30";
    TextArea.rows="5"; 
    BlocoTarefa.appendChild(TextArea);

    const divBotoes = document.createElement('ul');
    divBotoes.classList.add('botoes-tarefa-box');
    BlocoTarefa.appendChild(divBotoes);

    const botoes = [];
    const namesIcons = ['delete','close','save'];
    const namesButton = ['Deletar','Cancelar','Salvar']

    for (let i = 0; i < 3 ; i++) {
        let listaStyle = document.createElement('li');
        divBotoes.appendChild(listaStyle);
        botoes[i] = document.createElement('button');

        if (i<2) {
            botoes[i].classList.add('botaoNoBorder');
        } else {
            botoes[i].classList.add('botaoBasic');
        }
        botoes[i].innerHTML = `<span class="material-symbols-outlined">${namesIcons[i]}</span>${namesButton[i]}`;
        listaStyle.appendChild(botoes[i]);
        
    }

}