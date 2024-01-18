async function GetLivros(){
    const ElementoLivro = document.getElementById('livros');

    const AcessarAPI = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
    const ListaDeLivros = await AcessarAPI.json(AcessarAPI);

    for (let i = 0; i < ListaDeLivros.length; i++) {
        let livro = ListaDeLivros[i];

        ElementoLivro.innerHTML += `
        <div class="livro" id="livro__item">
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            <img class="livro__imagem" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco">${ livro.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <p class="livro__quantidade" hidden>${livro.quantidade}</p>
        </div>`;
        
        if(livro.quantidade<=0) {
           document.querySelectorAll('.livro__imagem')[i].classList.add('livro_indisponivel');
        }

    }

    
}