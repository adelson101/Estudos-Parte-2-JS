const TipoDeFiltro = document.querySelectorAll('.btn');

//EVENTO DE CLICK DOS FILTROS

TipoDeFiltro.forEach( (botao) => botao.addEventListener('click' , filtrarLivros ) );

//Filtros dos Botoes

function filtrarLivros() {
    const ElementoBtn = document.getElementById(this.id);
    LimparBotoes(ElementoBtn);
    const categoria = ElementoBtn.value;
    console.log(categoria);
    let livrosFiltrados = categoria == 'disponivel' ? ListaDeLivros.filter( livro => livro.quantidade > 0 ) : ListaDeLivros.filter( livro => livro.categoria == categoria );
    ExibirListaDeLivros(livrosFiltrados);
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