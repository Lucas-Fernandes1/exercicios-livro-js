const gerarReferencia = () => {
    var inAutor = document.getElementById("inAutor");
    var btGerar = document.getElementById("btGerar");
    var outResposta = document.getElementById("outResposta");

    var autor = inAutor.value;

    if ( autor == "" ) {
        alert("Informe um autor para continuar.");
        inAutor.focus();
        return;
    }

    var partes = autor.split( " " )
    var tam = partes.length;

    var citacao = partes[tam - 1] + ", "
    
    for(var i = 0 ; i < tam ; i++ ) {
        citacao += partes[i].charAt(0) + ". ";
    }

    outResposta.textContent = citacao;
    
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarReferencia);