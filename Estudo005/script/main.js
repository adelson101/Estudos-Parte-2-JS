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
        
    }else {
        botao.addEventListener( ("click") , () => {
            filtrarLivros(botao.value);
        });
    }

});
