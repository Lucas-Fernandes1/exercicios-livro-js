const inNumero = document.getElementById("inNumero");
const btnCalc = document.getElementById("btnCalc");
const outResult = document.getElementById("outResult");

function decrescente() {

    let numero = Number(inNumero.value);
    let resultado = "";

    if(numero == "" || isNaN(numero)) {
        alert("Insira um número válido");
        inNumero.focus();
        return;
    }


    for(var i = numero; i > 0; i--) {
        if( i == 1 ) {
            resultado += i + ". "
        } else {
            resultado += i + ", "
        }
    }
    console.log(i)

    outResult.textContent = resultado;
}
btnCalc.addEventListener("click", decrescente)

/*<script>
let num = Number(prompt("Número"));

do {
    if(num == 0 || isNaN(num)) {
        alert("Insira um número válido");
    }

    
} while (num == 0 || isNaN(num));

var pares = `Pares entre 1 e ${num}: `;

if(num > 1) {
    pares += 2;
}

for(var i = 4; i <= num; i += 2) {debugger
    pares +=', ' + i;
}

alert(pares)

    
</script>*/