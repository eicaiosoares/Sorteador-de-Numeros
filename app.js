function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let inicioDaContagem = parseInt(document.getElementById('de').value); 
    let finalDaContagem = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numero;

    if ((quantidadeDeNumeros > 0) & (inicioDaContagem < finalDaContagem) & (quantidadeDeNumeros <= (finalDaContagem - inicioDaContagem + 1))) {
        for (let i = 0; i < quantidadeDeNumeros; i++) {
            numero = gerarNumeroAleatorio(inicioDaContagem, finalDaContagem);
            
            while (numerosSorteados.includes(numero)) {
                numero = gerarNumeroAleatorio(inicioDaContagem, finalDaContagem);
            }
    
            numerosSorteados.push(numero);
        }
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`
        alterarStatusBotao();
    } else if (quantidadeDeNumeros > (finalDaContagem - inicioDaContagem + 1)) {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Erro: Quantidade de números sorteados maior que o intervalo entre início e fim.</label>'
    }else {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Erro: Quantidade de Números Sorteados menor ou igual a zero</label>'
        
    }
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}