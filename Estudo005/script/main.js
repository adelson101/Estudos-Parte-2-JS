async function GetVideos(){
    const ElementoLivro = document.getElementById('livros');

    const AcessarAPI = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
    const ListaDeVideos = await AcessarAPI.json(AcessarAPI);

    ListaDeVideos.forEach((video)=>{
        ElementoLivro.innerHTML += `
        <div class="livro">
            <div class="tags">
                <span class="tag">${video.categoria}</span>
            </div>
            <img class="livro__imagem" src="${video.imagem}" alt="${video.alt}">
            <h2 class="livro__titulo">${video.titulo}</h2>
            <p class="livro__descricao">${video.autor}</p>
            <p class="livro__preco">${ video.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <div id='quantidade' hidden>${video.quantidade}</div>
        </div>`;
    });
}

GetVideos();