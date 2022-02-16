var anuncio = prompt("Anuncio");
var tamanhoFrase = anuncio.length;
var numPalavras = 0;

for(var i = 0; i < tamanhoFrase; i++) {
    if(anuncio.charAt(i) == " ") {
        numPalavras++
    }
}

alert(anuncio + "\n " + (numPalavras + 1));