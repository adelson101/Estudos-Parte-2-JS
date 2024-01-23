import { ConectarApi } from "./ConectarAPI.js";

<<<<<<< HEAD
let ListaDeVideos = [];
var EndPoint = 'http://localhost:3000/videos';

async function AcessandoAPI () {
    const AcessandoAPI = await fetch(EndPoint);
    ListaDeVideos = await AcessandoAPI.json();
    GerarUIVideos(ListaDeVideos); 
}

AcessandoAPI();
=======
ConectarApi.AcessandoAPI();
>>>>>>> f5d50cbaf8008636822f136f87ff393e4eadb2b8
