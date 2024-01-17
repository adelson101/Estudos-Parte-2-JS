const ContainerVideos = document.querySelector('.videos__container')

async function BuscarEMostrarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos =  await busca.json();
            
        videos.forEach( video => {
            if(video.categoria == "") {
                throw new Error('Video não possui categoria');
            } else {
                ContainerVideos.innerHTML += `
                <li class="videos__item">
                <iframe src="${video.url}" title=" ${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}<p>
                    <p class="categoria" hidden>${video.categoria}</p>
                </div>
                </li>
                `;
            }
            });
    }catch(error) {
        ContainerVideos.innerHTML = `<p>Erro ao carregar os videos: ${error}</p>`;
    }
}

BuscarEMostrarVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll('.videos__item');
    let valorFiltro = barraDePesquisa.value.toLowerCase();

        videos.forEach( (video) => {
            let titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
            
            video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block' ;
        });

}

const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");

    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
});

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll('.videos__item');
    const valorFiltro = filtro.toLowerCase();

    for(let video of videos) {
        const videoCategorias = video.querySelector('.categoria').textContent.toLowerCase();
        video.style.display = videoCategorias==valorFiltro ? 'block' : 'none';
        if (filtro=='Tudo') {
            video.style.display='block';
        }
    } 
}