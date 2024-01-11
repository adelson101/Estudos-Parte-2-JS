import { Personagem } from "./components/modulos/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./components/modulos/mago.js";
import { Arqueiro } from "./components/modulos/arqueiro.js";
import { MagoArqueiro } from "./components/modulos/MagoArqueiro.js";
import { Guerreiro } from "./components/modulos/guerreiro.js";

const magoAntonio = new Mago('Antonio','fogo',7,9);
const magaJulia = new Mago('Julia','gelo',2,6);
const ArqueiroBruno = new Arqueiro('Bruno',10);
const ArqueiroMagoLucas = new MagoArqueiro('Lucas',12,'Terra',8,10);
const GuerreiroBalerion = new Guerreiro('Balerion',21);

const personagens = [magoAntonio,magaJulia,ArqueiroBruno,ArqueiroMagoLucas,GuerreiroBalerion]

new PersonagemView(personagens).render();