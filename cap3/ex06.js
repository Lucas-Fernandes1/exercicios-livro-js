const inLado1 = document.getElementById("inLado1");
const inLado2 = document.getElementById("inLado2");
const inLado3 = document.getElementById("inLado3");
const btnCalc = document.getElementById("btnCalc");
const outResult = document.getElementById("outResult");
const outTipo = document.getElementById("outTipo");

function verificaTriangulo() {

    let lado1 = Number(inLado1.value);
    let lado2 = Number(inLado2.value);
    let lado3 = Number(inLado3.value);

    if(lado1 > (lado2 + lado3) || lado2 > (lado1 + lado3) || lado3 > (lado1 + lado2)) {
        outResult.textContent  = `Dados inválidos para formação de um triângulo!`
        inLado1.value = "";
        inLado2.value = "";
        inLado3.value = "";
        inLado1.focus();
    } 
    else {
        if((lado1 == lado2) && (lado2 == lado3)) {
            outResult.textContent = `Os 3 lados formam um triângulo!`
            outTipo.textContent = `Tipo: Triângulo Equilátero`
        } else if ((lado1 == lado2) || (lado1 == lado3) || (lado3 == lado2) ) {
            outResult.textContent = `Os 3 lados formam um triângulo!`
            outTipo.textContent = `Tipo: Triângulo Isóceles`  
        } else {
            outResult.textContent = `Os 3 lados formam um triângulo!`
            outTipo.textContent = `Tipo: Triângulo Escaleno`
        }    
    }
} 

btnCalc.addEventListener("click", verificaTriangulo);
