let MaiorValor = 1000;
let MenorValor = 0;

let NumeroSecreto = NumeroAleatorio();
console.log(NumeroSecreto);
function NumeroAleatorio() {
   return parseInt(Math.random() * MaiorValor + 1);
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = MenorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = MaiorValor;