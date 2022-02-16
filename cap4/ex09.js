const inNChinchilas = document.getElementById("inNChinchilas");
const inAnos = document.getElementById("inAnos");
const btnGerar = document.getElementById("btnGerar");
const outResult = document.getElementById("outResult");

const calcularChinchilas = () => {
    let anos = Number(inAnos.value);
    let qtnd = Number(inNChinchilas.value);
    let quantidade = "";
    let total = qtnd;

    for(let i = 1; i <= anos; i++) {
        if(qtnd < 2) {
            throw new Error("O número de Chicnchilas deve ser maior que 2")
        }
        total *= 3;
        quantidade += `${i}° Ano: ${total}\n`
    }
    
    outResult.textContent = quantidade; 
}
btnGerar.addEventListener("click", calcularChinchilas);
