const inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
const inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
const btnCalc = document.getElementById("btnCalc");
const outResult = document.getElementById("outResult");

function calcMulta() {
    let velPermitida = Number(inVelocidadePermitida.value);
    let velCondutor = Number(inVelocidadeCondutor.value);

    let acimaPermitido = (velCondutor - velPermitida);
    let vintePorCentoPermitido = (velPermitida * 0.2);
    console.log(acimaPermitido)
    console.log(vintePorCentoPermitido)
    
    if(velCondutor < velPermitida) {
        outResult.textContent = `Você não cometeu nenhuma infração`;
    } else if (acimaPermitido >= vintePorCentoPermitido){
        outResult.textContent = `Você cometeu uma infração grave`;
    } else {
        outResult.textContent = `Você não cometeu nenhuma infração`;
    }
    
}
btnCalc.addEventListener("click", calcMulta);