var itens = [];

const trocarItem = () => {
    var inpizza = document.getElementById("inPizza");
    var inBebida = document.getElementById("inBebida");

    if(rbPizza.checked) {
        inBebida.className = "oculta";
        inpizza.className = "exibe";
    } else {
        inpizza.className = "oculta";
        inBebida.className = "exibe";
    }
}

var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

const mostrarNumSabores = () => {
    
    if (rbPizza.checked) {
        var pizza = inPizza.value;
        var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
        inDetalhes.placeholder = "Até " + num  + " sabores";
    }
}

var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);

inDetalhes.addEventListener("blur", function(){
    inDetalhes.placeholder = "";
})