
var EndPoint = 'http://localhost:3000/videos';
export let ListaDeVideos;

export async function AcessandoAPI () {
    try {
        const AcessandoAPI = await fetch(EndPoint);
        ListaDeVideos = await AcessandoAPI.json();
        return ListaDeVideos;
    } catch (error) {
        return error;
    }
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
    
    if (!conexaoAPI.ok) {
        throw new Error('Não foi possível enviar o video');
    }

    const ConexaoConvertida = await conexaoAPI.json();
    return ConexaoConvertida;
}

export const ConectarApi = {
    AcessandoAPI,
    CriarVideoAPI
}