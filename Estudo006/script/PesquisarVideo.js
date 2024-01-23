import { PesquisarVideo } from "./ConectarAPI.js";

async function Pesquisar(evento) {
    evento.preventDefault();

    const DadosDaPesquisa = document.querySelector('[data-pesquisar]').value;
    const busca = await PesquisarVideo(DadosDaPesquisa);
    console.log(busca);
}

const BotaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

BotaoDePesquisa.addEventListener("click", evento => Pesquisar(evento));