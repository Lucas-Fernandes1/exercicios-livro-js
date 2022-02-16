var btGerar = document.getElementById("btGerar");

btGerar.addEventListener("click", function() {

    var inValor = document.getElementById("inValor");
    var outParcelas = document.getElementById("outParcelas");

    var valor = Number(inValor.value);
    
    var lista = "";

    for( var i = 1 ; i < 10 ; i++ ) {
        lista += i + " x de R$ " + (valor / i).toFixed(2) + "\n";
    }
    outParcelas.textContent = "Opções de pagamento: \n\n" + lista;

    inValor.value = null;

});