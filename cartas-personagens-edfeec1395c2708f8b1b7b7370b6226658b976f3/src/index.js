import { Personagem } from "./components/modulos/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";

const PersonagemPedrinho = new Personagem('Pedrinho',5,'Mago');
const PersonagemJose = new Personagem('Jose',3,'Arqueiro');

const personagens = [PersonagemPedrinho,PersonagemJose]

new PersonagemView(personagens).render()