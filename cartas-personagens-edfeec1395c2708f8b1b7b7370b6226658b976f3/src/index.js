import { Personagem } from "./components/modulos/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./components/modulos/mago.js";

const magoAntonio = new Mago('Antonio',5,'fogo',7,9);
const magaJulia = new Mago('Julia',3,'gelo',2,6)

const personagens = [magoAntonio,magaJulia]

new PersonagemView(personagens).render();