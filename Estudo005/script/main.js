GetLivros();

function filtrarLivros(filtro) {
    const livros = document.querySelectorAll('div#livro__item');

    livros.forEach( (livro) =>{
        const tagLivro = livro.querySelector('.tag').textContent.toLocaleLowerCase();
        livro.style.display = tagLivro.includes(filtro) ? 'block' : 'none';
    });
   
}

const TipoDeFiltro = document.querySelectorAll('li button');

TipoDeFiltro.forEach( (botao) => {

    if (botao.value=="") {
        switch (botao.getAttribute("id")) {
            case 'btnFiltrarLivrosDisponiveis':
                botao.addEventListener ( ("click") , () => {
                    const livros = document.querySelectorAll('div#livro__item');

                    livros.forEach( (livro) =>{
                        livro.style.display = Number(livro.querySelector('.livro__quantidade').textContent)>0 ? 'block' : 'none';
                    });
                });
            break;
            case 'btnFiltrarLivrosPorPreco':
                  

            break;
        }

    }else {
        botao.addEventListener( ("click") , () => {

            TipoDeFiltro.forEach( b => {
                b.classList.remove('active');
            });

            botao.classList.add('active');
            filtrarLivros(botao.value);

        });
    }

});