function ExibirListaDeLivros(ListaDeLivros) {
    const LivrosComDesconto = aplicarDesconto(ListaDeLivros);

    const ElementoLivro = document.getElementById('livros');
    
    ElementoLivro.innerHTML = '';

    ListaDeLivros.forEach( (livro,i) => {

        ElementoLivro.innerHTML += `
        <div class="livro" id="livro__item">
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            <img class="livro__imagem" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco desconto">R$ ${livro.preco.toFixed(2)}</p>
            <p class="livro__quantidade" hidden>${livro.quantidade}</p>
        </div>`;
        
        if (document.querySelectorAll('.desconto')[i]) {
            const desconto = document.querySelectorAll('#livro__item')[i].insertAdjacentElement('beforeend',document.createElement('span'));
            desconto.classList.add('livro__desconto');
            desconto.innerHTML = ` R$ ${LivrosComDesconto[i].preco.toFixed(2)}`;
        }

        if (livro.quantidade<=0) {
           document.querySelectorAll('.livro__imagem')[i].classList.add('livro_indisponivel');
        }

    });

}