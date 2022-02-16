const inNumero = document.getElementById("inNumero");
const btnCriar = document.getElementById("btnCriar");
const outResult = document.getElementById("outResult");

const verificaEstrelas = () => {

    var numero = Number(inNumero.value);
    var estrelas = "";

    for(let i = 1; i <= numero; i++) {
        if(i % 2 == 1) {
            estrelas += `*`;
        } else {
            estrelas += `-`;
        }
        outResult.textContent = estrelas;
    }
}
btnCriar.addEventListener('click', verificaEstrelas);