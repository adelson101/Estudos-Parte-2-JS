import { AcessandoAPI } from "./ConectarAPI.js";
import { GerarVideos } from "./videos.js";

async function ExecutarAPI() {
   GerarVideos(await AcessandoAPI());
}

ExecutarAPI();