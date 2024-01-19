const elementoComValorDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function ExibirListaDeLivros(ListaDeLivros) {
    const LivrosComDesconto = aplicarDesconto(ListaDeLivros);
    const ElementoLivro = document.getElementById('livros');

    elementoComValorDeLivrosDisponiveis.innerHTML = '';
    ElementoLivro.innerHTML = '';

    ListaDeLivros.forEach( (livro,i) => {
        const DisponibilidadeLivro = livro.quantidade > 0 ? 'livro__imagem' : 'livro__imagem livro_indisponivel';
        ElementoLivro.innerHTML += `
        <div class="livro" id="livro__item">
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            <img class="${DisponibilidadeLivro}" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <div class="livro__precos">
            <p class="livro__preco desconto">R$ ${livro.preco.toFixed(2)}</p>
            </div>
        </div>`;
        
        if (document.querySelectorAll('.desconto')[i]) {
            const descontoElement = document.querySelectorAll('#livro__item')[i];
            descontoElement.innerHTML += `<span class="livro__desconto"> R$ ${LivrosComDesconto[i].preco.toFixed(2)} </span>`;

            let DivPreco = document.querySelectorAll('.livro__precos')[i];
            DivPreco.innerHTML += `<span class="livro__desconto__quantidade"><i class="fa-solid fa-down-long"></i> ${descontoProduto*100}%</span>`;
        }

    });

}