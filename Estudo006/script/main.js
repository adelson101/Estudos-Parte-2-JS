import { GerarUIVideos } from "./videos.js";

let ListaDeVideos = [];
var EndPoint = 'http://localhost:3000/videos';

async function AcessandoAPI () {
    const AcessandoAPI = await fetch(EndPoint);
    ListaDeVideos = await AcessandoAPI.json();
    GerarUIVideos(ListaDeVideos); 
}

AcessandoAPI();