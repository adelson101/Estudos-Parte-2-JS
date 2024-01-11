export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    static tipo
    static descricao

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
    }

    get level(){
        return this.#level;
    }

    set level(novoLevel){
        if (novoLevel>0 && novoLevel<=10){
            this.#level=novoLevel;
        }
    }
    
    diminuirLevel() {
        return this.level--;
    }

    aumentarLevel() {
        return this.level++;
    }

    obterInsignia() {
        if (this.#level>=5) {
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