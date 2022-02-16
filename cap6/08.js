const criptografar = () => {
    var inMensagem = document.getElementById("inMensagem");
    var outResposta = document.getElementById("outResposta");

    var mensagem = inMensagem.value;

    if ( mensagem == "" ) {
        alert("Informe a mensagem.");
        inMensagem.focus();
        return;
    }
    
    var resposta = "";
    var tam = mensagem.length;

    for ( var i = 1; i < tam; i += 2 ) {
        resposta += mensagem.charAt(i);
    }

    for ( var i = 0 ; i < tam ; i += 2 ) {
        resposta += mensagem.charAt(i);
    }

    outResposta.textContent = resposta;
}

var btCripto = document.getElementById("btCripto");
btCripto.addEventListener("click", criptografar);

const descriptografar = () => {
    
    var inMensagem = document.getElementById("inMensagem");
    var outResposta = document.getElementById("outResposta");

    var mensagem = inMensagem.value;

    if ( mensagem == "" ) {
        alert("Informe a mensagem.");
        inMensagem.focus();
        return;
    }

    var tam = mensagem.length;
    var metade = Math.floor(tam / 2);
    var resposta = "";

    if ( tam % 2 == 0 ) {
        for ( var i = metade ; i < tam - 1; i++ ) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
    } else {
        for ( var i = metade ; i < tam - 1 ; i ++ ) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
        resposta += mensagem.charAt(i);
    }
    outResposta.textContent = resposta;
}
var btCripto = document.getElementById("btDescripto");
btCripto.addEventListener("click", descriptografar);