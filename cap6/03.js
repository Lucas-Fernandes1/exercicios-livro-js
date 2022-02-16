var palavra = prompt("Palavra: ")
var tamPalavra = palavra.length;
var inverso = palavra.charAt(tamPalavra - 1).toUpperCase();


for(var i = tamPalavra - 2; i >= 0 ; i--) {
    inverso += palavra.charAt(i).toLocaleLowerCase();
}

alert(palavra + "\n" + inverso);lucas