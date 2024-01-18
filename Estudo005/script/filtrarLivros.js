const TipoDeFiltro = document.querySelectorAll('.btn');

//EVENTO DE CLICK DOS FILTROS

TipoDeFiltro.forEach( (botao) => botao.addEventListener('click' , filtrarLivros ) );

//Filtros dos Botoes

function filtrarLivros() {
    const ElementoBtn = document.getElementById(this.id);
    const categoria = ElementoBtn.value;
    let livrosFiltrados = [];
    if (categoria!="") {
        livrosFiltrados = ListaDeLivros.filter( livro => livro.categoria == categoria );
    }else {
        switch(ElementoBtn.getAttribute('id')) {
            case 'btnFiltrarLivrosDisponiveis':
                livrosFiltrados = ListaDeLivros.filter( livro => livro.quantidade > 0 ); 
            break;
            case 'btnFiltrarLivrosPorPreco':
                livrosFiltrados = ListaDeLivros.sort( function(a,b) {
                    if ( a.preco > b.preco ) {
                        return 1;
                    }
                    if ( a.preco < b.preco) {
                        return -1;
                    }
                    return 0;
                } );
            break;
        }
    }
    ExibirListaDeLivros(livrosFiltrados);
}

// EVENTOS DOS ESTILO DO ESTILO

function LimparBotoes(botao) {
    TipoDeFiltro.forEach( b => {
        b.classList.remove('active');
    });

    botao.classList.add('active');
}