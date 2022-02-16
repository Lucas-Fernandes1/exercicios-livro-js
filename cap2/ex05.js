function calcularDesconto() {
    let inProdut = document.getElementById("inProd");
    let inPreco = document.getElementById("inPreco");
    let outProd = document.getElementById("outProd");
    let outPreco = document.getElementById("outPreco");

    let produto = inProdut.value;
    let preco = Number(Math.floor(inPreco.value));

    let valorDesc = preco * 2;

    outProd.textContent = `Promoção de ${produto}`;
    outPreco.textContent = `Leve 2 unidades por apenas: R$ ${valorDesc.toFixed(2)}`    
}
let calcDesconto = document.getElementById("calcDesconto");
calcDesconto.addEventListener("click", calcularDesconto);
