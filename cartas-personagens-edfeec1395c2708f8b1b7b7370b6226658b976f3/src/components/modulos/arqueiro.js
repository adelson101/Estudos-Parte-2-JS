import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza
    static tipo = 'Arqueiro';
    static descricao = 'Você tem o meu arco!';

    constructor (nome, level, destreza) {
        super(nome,level);
        this.destreza = destreza;
    }

    obterInsignia() {
        if(this.descricao >= 5) {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }
    
}