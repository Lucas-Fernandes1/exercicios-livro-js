function calcValor() {
    let inVeiculo = document.getElementById("inVeiculo");
    let inValor = document.getElementById("inValor");
    let outVeiculo = document.getElementById("outVeiculo");
    let outValor = document.getElementById("outValor");
    let outParcela = document.getElementById("outParcela");

    let veiculo = inVeiculo.value;
    let valor = Number(inValor.value);

    let entrada = (valor * 0.5);
    let parcelas = entrada / 12;

    outVeiculo.textContent = `Veículo: ${veiculo}`;
    outValor.textContent = `Com uma entrada de apenas: R$ ${entrada.toFixed(2)}`;
    outParcela.textContent = `em 12 x de: R$ ${parcelas.toFixed(2)}`; 
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcValor);