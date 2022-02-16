const inSaque = document.getElementById("inSaque");
const outNotasCem = document.getElementById("outNotasCem");
const outNotasCinquenta = document.getElementById("outNotasCinquenta");
const outNotasDez = document.getElementById("outNotasDez");
const outMoedaUmReal = document.getElementById("moedaUmReal");
const btnSaque = document.getElementById("btnSaque");
const inSenha = document.getElementById("inSenha");
const inNome = document.getElementById("inNome");


const pessoa = {
    nome: "Usuario",
    senha: 123456
}

function verificaSenha(){
    senhaValor = Number(inSenha.value);
    nomeUsuario = inNome.value;
    
    if(senhaValor != pessoa.senha || nomeUsuario != pessoa.nome){
        alert("Senha ou usuário incorreto, digite novamente")
        inNome.focus();
    } else {
        return calcCedulasSaque()
    }
    
}

function calcCedulasSaque() {
    
    let saque = Number(inSaque.value);

    if(saque == 0 || isNaN(saque)) {
        alert("Informe o valor a ser sacado");
        inSaque.focus();
        return;
    } else {
        alert("Senha correta, verifique seu dinheiro")
    }

    let notasCem = Math.floor(saque / 100);
    let resto = saque % 100;

    let notasCinquenta = Math.floor(resto / 50); 
    resto %=  50;

    let notasDez = Math.floor(resto / 10);
    resto %=  10;

    let moedaReal = Math.floor(resto / 1)
    resto %= 1; 
    
    if(notasCem > 0) {
        outNotasCem.textContent = `Notas de R$ 100: ${notasCem}`
    } 
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = `Notas de R$ 50: ${notasCinquenta}`
    } 
    if (notasDez > 0) {
        outNotasDez.textContent = `Notas de R$ 10: ${notasDez}`
    }
    if (moedaReal > 0) {
        outMoedaUmReal.textContent = `Moeda de R$ 1: ${moedaReal}`
    }
    console.log(moedaReal)
}
btnSaque.addEventListener("click", verificaSenha);