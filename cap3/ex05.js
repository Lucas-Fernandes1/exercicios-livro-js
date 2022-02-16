const inValor = document.getElementById("inValor");
const btnPagar = document.getElementById("btnPagar");
const outTroco = document.getElementById("outTroco");
const outTempo = document.getElementById("outTempo");

function valorParquimetro() {
    let valor = Number(inValor.value);
    
    let troco30Minutos = (valor - 1).toFixed(2);
    let troco60Minutos = (valor - 1.75).toFixed(2);
    let troco120Minutos = (valor - 3).toFixed(2);


    if(valor >= 1 && valor <1.75) {
        outTempo.textContent = `Tempo: 30 Min`;
        outTroco.textContent = `Troco: ${troco30Minutos}`;
    } else if (valor > 1.75 && valor < 3) {
        outTempo.textContent = `Tempo: 60 Min`;
        outTroco.textContent = `Troco: ${troco60Minutos}`;
    } else {
        outTempo.textContent = `Tempo: 120 Min`;
        outTroco.textContent = `Troco: ${troco120Minutos}`;
    }
}
btnPagar.addEventListener("click", valorParquimetro);