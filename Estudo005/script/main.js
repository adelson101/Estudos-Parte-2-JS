const EndPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let ListaDeLivros = [];

async function GetLivros(){

    const AcessarAPI = await fetch(EndPointAPI);
    ListaDeLivros = await AcessarAPI.json(AcessarAPI);
    ExibirListaDeLivros(ListaDeLivros);
}

GetLivros();