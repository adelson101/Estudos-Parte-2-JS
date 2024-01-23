import { GerarVideos } from "./videos.js";

var EndPoint = 'http://localhost:3000/videos';

async function AcessandoAPI () {
    const AcessandoAPI = await fetch(EndPoint);
    const ListaDeVideos = await AcessandoAPI.json();
    return GerarVideos(ListaDeVideos);
}

async function CriarVideoAPI(titulo,descricao,url,imagem) {
    const conexaoAPI = await fetch( EndPoint , {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const ConexaoConvertida = await conexaoAPI.json();
    return ConexaoConvertida;
}

export async function PesquisarVideo(termoDeBusca) {
    const AcessandoAPI = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexao = await AcessandoAPI.json();
    return conexao;
}

export const ConectarApi = {
    AcessandoAPI,
    CriarVideoAPI,
    PesquisarVideo
}