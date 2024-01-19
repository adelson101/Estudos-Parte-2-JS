function GerarHeader () {
    let VerificarPagina = '';
    let IndexPagina = '';
    let PaginaVideo = '';
    let TipoLogo = '';

    if ( window.location.pathname.includes('index.html')) {
        VerificarPagina = '';
        IndexPagina = 'index.html';
        PaginaVideo = 'pages/enviar-video.html';
        TipoLogo = '';
    }else {
        VerificarPagina = 'hidden';
        IndexPagina = '../index.html';
        PaginaVideo = 'enviar-video.html';
        TipoLogo = 'class = "center"';
    }

    document.body.innerHTML += 
    `
    <header ${TipoLogo}>
        <a class="header__Logo" href="${IndexPagina}"></a>
        <label class="container__pesquisar" for="pesquisarVideo" ${VerificarPagina}>
            <input type="search" name="pesquisarVideo" id="pesquisarVideo" class="header__pesquisar" placeholder="Pesquisar">
            <button class="header__pesquisar_botao"></button>
        </label>
        <a class="header__botao_adicionarVideo" href="${PaginaVideo}"></a>
    </header>
        <div class="barra__inferior_mobile">
            <a class="header__mobile_botao_adicionarVideo" href="${PaginaVideo}" href="#"></a>
        </div>`;
}

GerarHeader();