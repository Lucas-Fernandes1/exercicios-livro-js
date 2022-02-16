function calcValorRefeicao() {
    let inPreco = document.getElementById("inPreco");
    let inPeso = document.getElementById("inPeso");
    let outValor = document.getElementById("outValor");

    let preco = Number(inPreco.value);
    let peso = Number(inPeso.value)/1000;

    let valorRefeicao = (preco * peso);
    outValor.textContent = `O valor da refeição é: R$ ${valorRefeicao.toFixed(2)}`
}
let calcRefeicao = document.getElementById("calcRefeicao");
calcRefeicao.addEventListener("click", calcValorRefeicao);