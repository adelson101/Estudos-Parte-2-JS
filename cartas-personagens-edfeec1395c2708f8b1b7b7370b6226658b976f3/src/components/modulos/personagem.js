export class Personagem {
    nome
    vida
    mana
    level
    static tipo
    static descricao

    constructor(nome,level,tipo) {
        this.nome = nome;
        this.level = level;
        this.tipo = tipo;
        this.vida = 100;
        this.mana = 100;
    }

    obterInsignia() {
        if (this.level>=5) {
            return `Inplacavel ${this.constructor.tipo}`;
        } else {
            return 'Iniciante';
        }
    }

    static verificarVencedor(personagemDesafiante,personagemDesafiado) {
        if (personagemDesafiante.level === personagemDesafiado.level) return 'Empate!!!';
        if(personagemDesafiante.level > personagemDesafiado.level) return `${personagemDesafiante.constructor.tipo} ${personagemDesafiante.nome} e o vencedor!`;
        else return `${personagemDesafiado.constructor.tipo} ${personagemDesafiado.nome} e o vencedor!`;
    }
}