import { ListaDeVideos } from "./ConectarAPI.js";
import { GerarVideos } from "./videos.js";


ListaDeVideos
async function Pesquisar(evento) {
    evento.preventDefault();

    const Pesquisa = document.querySelector('[data-pesquisar]').value.toLowerCase();
    
    if(Pesquisa!=''){
        const PesquisarVideo = ListaDeVideos.filter( (video) => video.titulo.toLowerCase().includes(Pesquisa) );
        GerarVideos(PesquisarVideo);
    }else {
        GerarVideos(ListaDeVideos);
    }
    
}

const BotaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

BotaoDePesquisa.addEventListener("click", evento => Pesquisar(evento));