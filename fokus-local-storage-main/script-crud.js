const botaoAdicionar = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const TextArea = document.querySelector('.app__form-textarea');
const ul = document.querySelector('.app__section-task-list');
const paragrafoDescriçãoTarefa = document.querySelector('.app__section-active-task-description');
const BotaoLimparConcluidas = document.getElementById('btn-remover-concluidas');
const BotaoLimparTudo = document.getElementById('btn-remover-todas');
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

let Tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

botaoAdicionar.addEventListener('click' , () => {
    formAdicionarTarefa.classList.toggle('hidden');
});

Tarefas.forEach( (e) => {
    CriarElementoTarefa(e);
})

formAdicionarTarefa.addEventListener('submit' , (event) => {
    event.preventDefault();

    tarefa = {
        descricao: TextArea.value,
        status: false
    }

    Tarefas.push(tarefa);
    SetSave();
    CriarElementoTarefa(Tarefas[Tarefas.length-1]);
    TextArea.value = '';
    formAdicionarTarefa.classList.add('hidden')
});

function CriarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = ' <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="12" fill="#FFF"></circle><path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path> </svg> '

    const p = document.createElement('p');
    p.classList.add('app__section-task-list-item-description');
    p.innerText = tarefa.descricao;

    const button = document.createElement('button');
    button.classList.add('app_button-edit');

    button.onclick = () => {
        const edit = prompt('Qual o novo Nome da Tarefa?');
        if (edit) {
            p.textContent = edit;
            tarefa.descricao = edit;
            SetSave();  
        }
    };

    const imgButton = document.createElement('img');
    imgButton.setAttribute('src','/imagens/edit.png');
    button.append(imgButton);

    li.append(svg,p,button);
    ul.append(li);

    if(tarefa.status) {
        li.classList.add('app__section-task-list-item-complete');
        li.querySelector('button').setAttribute('disabled','disabled');
    } else {
        li.onclick = () => { 

            document.querySelectorAll('.app__section-task-list-item-active')
            .forEach( e => {
                e.classList.remove('app__section-task-list-item-active');
            })
    
            if (tarefaSelecionada == tarefa) {
                paragrafoDescriçãoTarefa.textContent = ''
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
                return
            }
    
            tarefaSelecionada = tarefa;
            liTarefaSelecionada = li;
            paragrafoDescriçãoTarefa.textContent = tarefa.descricao; 
            li.classList.add('app__section-task-list-item-active');
        }
    }
}

function SetSave() {
    localStorage.setItem('tarefas', JSON.stringify(Tarefas));
}



document.addEventListener('FocoFinalizado' , () => {
    if ( tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled','disabled');
        tarefaSelecionada.status = true;
        SetSave();
    }
})

const RemoverTarefas = (SomenteCompletas=false) => {
    const selector =  SomenteCompletas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
    document.querySelectorAll(selector).forEach( r => {
        r.remove();
    });
    Tarefas = SomenteCompletas ? Tarefas = Tarefas.filter(tarefa => !tarefa.status) : [];
    SetSave();
}

BotaoLimparTudo.onclick = () => {
    RemoverTarefas();
}

BotaoLimparConcluidas.onclick = () => {
    RemoverTarefas(true);
}