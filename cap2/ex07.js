const inProduto = document.getElementById("inProduto");
const inPrecoProduto = document.getElementById("inPrecoProduto");
const outPromocao = document.getElementById("outPromocao");
const outProduto = document.getElementById("outProduto");
const btnCalcPromo = document.getElementById("btnCalcPromo");



function calcularDescontoProduto() {
    let produto = inProduto.value;
    let preco = Number(inPrecoProduto.value);
    let terceiroItem = preco * 0.5

    let calcOferta = (preco * 3) - terceiroItem;

    outPromocao.textContent = `Preço Oferta pro item ${produto} é: R$ ${calcOferta.toFixed(2)}`
    outProduto.textContent = `O terceiro item fica por R$ ${terceiroItem.toFixed(2)}`
}
btnCalcPromo.addEventListener("click", calcularDescontoProduto);