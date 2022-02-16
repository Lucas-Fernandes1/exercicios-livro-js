const inNumero = document.getElementById("inNumero");
const btnVerify = document.getElementById("btnVerify");
const outResult = document.getElementById("outResult");


const verificaNumeroPrimo = () => {
    let numero = Number(inNumero.value);

    let temDivisor = 0;

    for(let i = 2; i <= numero/2 ; i++) {
        if(numero % i == 0) {
            temDivisor = 1;
            break;
        } 
    } if (numero > 1 && !temDivisor) {
        outResult.textContent = `${numero} é primo`;
    } else {
        outResult.textContent = `${numero} não é primo`;
    }
    inNumero.value = "";
}
btnVerify.addEventListener('click', verificaNumeroPrimo);