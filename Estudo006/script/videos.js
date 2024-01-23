const CardVideos = document.querySelector('[data-lista]');

export function GerarVideos(videos){
    CardVideos.innerHTML = '';

    videos.forEach( (video) => {
        CardVideos.innerHTML += `
        <li class="video__item">
            <iframe width="100%" height="72%" src="${video.url}" title="${video.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img src="${video.imagem}" alt="logo do canal alura">
                    <h3 class="video__titulo">${video.titulo}</h3>
                    <p>${video.descricao}</p>
                </div>
        </li>
        `;
    });

    return CardVideos;
}