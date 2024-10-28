let listaNumSorteados = [];
let numeroLimite = 10;
let numSecreto = numAleatorio();
let tentativas = 0;


exibirMsgInicial();
function exibirMsgInicial(){
    exibirTextoEmTela('h1', 'Jogo do número secreto');
    exibirTextoEmTela('p', 'Escolha um número entre 1 e 10');
}

function exibirTextoEmTela(tagType, texto){
    let tag = document.querySelector(tagType);
    tag.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas++;
    console.log(tentativas);
    if (chute == numSecreto){
        exibirTextoEmTela('h1', 'Acertou!');
        let pluraltentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o númerou secreto! com ${tentativas} ${pluraltentativas}!`;
        exibirTextoEmTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numSecreto){
            exibirTextoEmTela('p', 'O número secreto é menor, tente novamente');
        }else{
            exibirTextoEmTela('p', 'O número secreto é maior, tente novamente');
        }
        limparCampo();
        
    }
}

function numAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    //let qtdeElementos = listaNumSorteados.length;
    if(listaNumSorteados.length == numeroLimite - 5){
        listaNumSorteados = [];
    }
    if (listaNumSorteados.includes(numeroEscolhido)){
        return numAleatorio();
    }else{
        listaNumSorteados.push(numeroEscolhido);
        console.log(listaNumSorteados);
        return numeroEscolhido;
    }    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function Restart(){
    numSecreto = numAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disable', true);
}
//document.querySelector() -> o js seleciona elementos dentro do DOM de um documento HTML a tag que se encontra entre parenteses
    //DOM (document object model)
    //o document.queryselector é atribuída a variavel e depois essa variável recebe um valor que aparecerá na tag atribuído no html ou pagina com o nomedaVar.innerHTML

/*

let titulo = document.querySelector('h1'); 
titulo.innerHTML = 'Jogo do número secreto';
//ambas as linhas de cima e debaixo são iguais, permitindo que usemos uma função para elas
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//as linhas praticamente são:
let tag = document.querySelector(tagType);
tag.innerHTML = texto
esse código pode ficar isolado em um função e evitar repetição de código

*/
//função, na hora de invocá-la, dar os argumentos/parametros entre parenteses
//abaixo executa a função, o valor entre parenteses indica o que vai dentro da tagType
//se houver mais de um parâmetro, separe-o por vírgulas

//dentro de do button escreve on click
    //<button onclick = ''> o js recebe do html quando o botão é clicado e retorna aqui como uma função
    //no html se escreve a função até com os parenteses
    //function = função de linguagem de programação uma área com um código que será repetido mais de uma vez em momentos variados
//aqui possui tres tipos de funções, retorno, com parametro, sem retornos, etc
//return, comando para que a linha/função retorne algo, em javascript é necessário escrever return antes do método que vc quer que retorne algo


//parseInt transforma em um número inteiro
//math.random() é uma função, gera valor entre 0 e 1 0 inclusivo e 1 exclusivo e depois da vírgula possui muitos digitos

//<<input>> = entrada de usuário está no HTML
//O .value no final é para receber o valor de qualquer tipo que está na entrada da caixa

//boolean true ou false