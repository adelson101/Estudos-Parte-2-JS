const TipoDeFiltro = document.querySelectorAll('.btn');

//EVENTO DE CLICK DOS FILTROS

TipoDeFiltro.forEach( (botao) => botao.addEventListener('click' , filtrarLivros ) );

//Filtros dos Botoes

function filtrarLivros() {
    const ElementoBtn = document.getElementById(this.id);
    LimparBotoes(ElementoBtn);
    const categoria = ElementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? FiltrarPorDisponivel() : FiltrarPorCategoria(categoria);
    ExibirListaDeLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const ValorTotal = CalcularValorTotal(livrosFiltrados);
        elementoComValorDeLivrosDisponivei(ValorTotal);
    }
}

function FiltrarPorCategoria(categoria) {
    return ListaDeLivros.filter(livro => livro.categoria == categoria);
}

function FiltrarPorDisponivel() {  
    return ListaDeLivros.filter(livro => livro.quantidade > 0);
}

function elementoComValorDeLivrosDisponivei(ValorTotal) {
    elementoComValorDeLivrosDisponiveis.innerHTML = `<div class="livros_disponiveis"><p>Todos os livros disponíveis por R$ <span id="valor">${ValorTotal}</span></p></div>`;
}

const OrdernarPorPreco = TipoDeFiltro[4];
OrdernarPorPreco.addEventListener (('click'), () => {
    const livrosFiltrados = ListaDeLivros.sort( (a,b) => a.preco - b.preco );
    ExibirListaDeLivros(livrosFiltrados);
})

// EVENTOS DOS ESTILO DO ESTILO

function LimparBotoes(botao) {
    TipoDeFiltro.forEach( b => {
        b.classList.remove('active');
    });

    botao.classList.add('active');
}