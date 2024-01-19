function CalcularValorTotal(livrosFiltrados) {
   return livrosFiltrados.reduce( (acc,livro) => acc + livro.preco, 0 );
}