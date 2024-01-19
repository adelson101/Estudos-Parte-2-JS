let descontoProduto = 0;

function aplicarDesconto(livros) {
    descontoProduto = 0.3;

    const ListaDeDescontos = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * descontoProduto) }
    });
    return ListaDeDescontos;
}