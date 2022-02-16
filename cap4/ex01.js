const inNumero = document.getElementById("inNumero");
const btnCalc = document.getElementById("btnCalc");
const outCalc = document.getElementById("outCalc");

function tabuada() {
    let numero = Number(inNumero.value);
    let resposta = "";

    if(numero == "" || isNaN(numero)) {
        alert("Insira um número válido");
        inNumero.focus();
        return;
    }

    for(let i = 0; i <= 10; i++) {
        resposta += numero + " x " + i + " = " + numero * i + "\n"
    }

    outCalc.textContent = resposta;
}
btnCalc.addEventListener("click", tabuada);