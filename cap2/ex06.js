function calcTempoUso() {
    let inValor = document.getElementById("inValor");
    let inTempo = document.getElementById("inTempo");
    let outValor = document.getElementById("outValor");

    let valorPorTempo = Number(inValor.value);
    let tempoDeUso = inTempo.value;
    let tempoDeUsoTotal = Math.ceil(tempoDeUso / 15);
    
    let valorAPagar = tempoDeUsoTotal * valorPorTempo;

    outValor.textContent = `o valor a pagar é ${valorAPagar.toFixed(2)}`
}

let calcHorasUsadas = document.getElementById("calcHorasUsadas");
calcHorasUsadas.addEventListener("click", calcTempoUso);