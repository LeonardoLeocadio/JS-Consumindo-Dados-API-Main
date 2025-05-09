async function buscaEndereco() { 
    var mensagememErro = document.getElementById('erro');
    mensagememErro.innerHTML = "";
    try {
    var consultaCEP =  await fetch('https://viacep.com.br/ws/$(cep)/0100100/json')
    var consultaCEPConvertida = await consultaCEP.json();
    if(consultaCEPConvertida.erro){
        throw Error('CEP não existe');
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;

    console.log(consultaCEPConvertida); 
    return consultaCEPConvertida;
    } catch(erro){
        mensagememErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
}

var CEP = document.getElementById('cep');
CEP.addEventListener('focusout', () => buscaEndereco(CEP.value));

   