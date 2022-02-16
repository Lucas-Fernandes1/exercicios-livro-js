const inNome = document.getElementById("inNome");
const rbMasculino = document.getElementById("rbMasculino");
const rbFeminino = document.getElementById("rbFeminino");
const inAltura = document.getElementById("inAltura");
const outCalc = document.getElementById("outCalc");
const outReset = document.getElementById("outReset");
const resultado = document.getElementById("resultado");

function calcularImc() {
    let nome = inNome.value;
    let masculino = rbMasculino.checked;
    let feminino = rbFeminino.checked;
    let altura = Number(inAltura.value);

    if(nome == "" || masculino == false && feminino == false ) {
        alert("Informe seu nome e sexo!");
        inNome.focus()
        return;
    }

    if(altura == 0 || isNaN(altura)) {
        alert("Informe sua altura corretamente");
        inAltura.focus();
        return;
    }

    if(masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    resultado.textContent = `Olá ${nome}, seu peso ideal é ${peso.toFixed(3)}.`;

}

function limparDados(){
    location.reload()
    document.getElementById("inNome").focus()
    // document.getElementById("inNome").value = "";
    // document.getElementById("rbMasculino").checked = false;
    // document.getElementById("rbFeminino").checked = false;
    // document.getElementById("inAltura").value = "";
    // document.getElementById("resultado").textContent = "";
    
    // inNome.focus();
}
outCalc.addEventListener("click", calcularImc);
outReset.addEventListener("click", limparDados);