let listaNumeroSorteado = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log (numeroSecreto);
exibirMensagemIniciar();

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemIniciar(){
    exibirTextoNaTela ('h1','Jogo do número Secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10')
    
}
function verificarChute() {
    let chute = document.querySelector('input').value;
        if (chute==numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavaTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o número Secreto com ${tentativas} ${palavaTentativa} !`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
        exibirTextoNaTela ('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();       
    } 
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumeroSorteado.length;

        if(quantidadeElementosNaLista == numeroLimite){
            listaNumeroSorteado = [];
        }
        if(listaNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado)
        return numeroEscolhido;
        
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIniciar();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

//let titulo = document.querySelector('h1');
//titulo.innerHTML =  'Jogo do número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
