import { Personagem } from "./components/modulos/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./components/modulos/mago.js";
import { Arqueiro } from "./components/modulos/arqueiro.js";
import { MagoArqueiro } from "./components/modulos/MagoArqueiro.js";

const magoAntonio = new Mago('Antonio',5,'fogo',7,9);
const magaJulia = new Mago('Julia',3,'gelo',2,6);
const ArqueiroBruno = new Arqueiro('Bruno',6,10);
const ArqueiroMagoLucas = new MagoArqueiro('Lucas',12,12,'Terra',8,10);

const personagens = [magoAntonio,magaJulia,ArqueiroBruno,ArqueiroMagoLucas]

new PersonagemView(personagens).render();

console.log(Personagem.VerificarVencer(magoAntonio,ArqueiroMagoLucas));