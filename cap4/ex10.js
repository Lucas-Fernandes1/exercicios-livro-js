const inNumero = document.getElementById("inNumero");
const btnVerifica = document.getElementById("btnVerifica");
const outResult = document.getElementById("outResult");

const verificaNumPerfeito = () => {
    let numero = Number(inNumero.value);
    
    let divisores = `Divisores do ${numero}: 1, `;
    let  soma = 1;


    for(let i = 2; i <= numero/2; i++) {
        if(numero % i == 0) {
            divisores += `${i}, `;
            soma += i;
        }
    }
    divisores += `\n(Soma: ${soma}) `;
    outResult.textContent = divisores;

    if (numero == soma) {
        outResult.textContent = `${divisores} é um número perfeito` 
    } else {
        outResult.textContent = `${divisores} não é um número perfeito`
    }
}
btnVerifica.addEventListener("click", verificaNumPerfeito);