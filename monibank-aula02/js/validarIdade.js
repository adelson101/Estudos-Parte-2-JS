export function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if(!ValidaIdade(dataNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function ValidaIdade (data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}