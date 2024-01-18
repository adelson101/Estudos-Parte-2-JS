async function GetLivros(){
    const ElementoLivro = document.getElementById('livros');

    const AcessarAPI = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
    const ListaDeLivros = await AcessarAPI.json(AcessarAPI);

    ListaDeLivros.forEach((livro)=>{
        ElementoLivro.innerHTML += `
        <div class="livro" id="livro__item">
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            <img class="livro__imagem" src="${livro.imagem}" alt="${livro.alt}">
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco">${ livro.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <div id='quantidade' hidden>${livro.quantidade}</div>
        </div>`;
    });

    
}