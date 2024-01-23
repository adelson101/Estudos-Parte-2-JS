import { GerarVideos } from "./videos.js";

var EndPoint = 'http://localhost:3000/videos';
export let ListaDeVideos;

async function AcessandoAPI () {
    const AcessandoAPI = await fetch(EndPoint);
    ListaDeVideos = await AcessandoAPI.json();
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

export const ConectarApi = {
    AcessandoAPI,
    CriarVideoAPI
}