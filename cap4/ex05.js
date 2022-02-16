//const inEntrada = document.getElementById("inEntrada");
//const btnEntrada = document.getElementById("btnEntrada");
const inDescricao = document.getElementById("inDescricao");
const inValor = document.getElementById("inValor");
const btnDespesa = document.getElementById("btnDespesa");
const outTotalEntradas = document.getElementById("outTotalEntradas");
const outListaContas = document.getElementById("outListaContas");
const outTotalDesp = document.getElementById("outTotalDesp");
//const outSaldo = document.getElementById("outSaldo");

/*function receberEntrada() {
    var entrada = Number(inEntrada.value);

    if(entrada == 0 || isNaN(entrada)) {
        alert("Informe um valor para a entrada.");
        inEntrada.value = ""
        inEntrada.focus();
        return;
    }

    outTotalEntradas.textContent = entrada.toFixed(2);
    inEntrada.value = "";
}*/

let numContas = 0;
let valTotal = 0;
let quantidade = "";

function registrarContas() {
    let descricao = inDescricao.value;
    let valor = Number(inValor.value);

    if(descricao == "" || valor == 0 || isNaN(valor)) {
        alert("Preencha os dados DESCRIÇÃO e VALOR DA DESPESA CORRETAMENTE");
        inDescricao.value = "";
        inValor.value = "";
        inDescricao.focus;
        return;
    }

    
    numContas++;
    valTotal  += valor;
    
    quantidade += `${descricao} - R$: ${(valor).toFixed(2)}\n `
    
    outListaContas.textContent = `${quantidade}----------------------------`
    outTotalDesp.textContent = numContas + " Conta(s) - Total R$ " + valTotal.toFixed(2);

    console.log(quantidade);
    console.log(numContas);

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
} 

// /*function calcSaldo() {
//     let saldo = inEntrada.value - valTotal;

//     outSaldo.textContent = `Seu saldo final é ${saldo.toFixed(2)}`
// }*/


// btnEntrada.addEventListener("click", receberEntrada);
btnDespesa.addEventListener("click", registrarContas);
