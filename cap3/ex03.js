const inNumero = document.getElementById("inNumero");
const btnEnviar = document.getElementById("btnEnviar");
const outResult = document.getElementById("outRestult");

function verificaParOuImpar() {
    let numero = Number(inNumero.value);
    
    if(numero % 2 === 0) {
        outResult.textContent = `O número ${numero} é par`
    } else{
        outResult.textContent = `O número ${numero} é impar`
    }
}
btnEnviar.addEventListener("click", verificaParOuImpar)