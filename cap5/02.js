var erros = [];

var sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;

const apostarNumero = () => {

var inNumero = document.getElementById("inNumero");
var numero = Number(inNumero.value);
var btApostar = document.getElementById("btApostar");

    if (numero <= 0 || numero > 100 || isNaN(numero)) {

        alert("Insira um número válido.")
        inNumero.focus();
        return;

    }

    var outDica = document.getElementById("outDicas");
    var outChances = document.getElementById("outChances");
    var outErros = document.getElementById("outErros");

    if (numero == sorteado) {
        alert("Parabéns você acertou!");
        btApostar.disabled = true;
        btJogar.className = "exibe"
        outDica.textContent = `Parabéns! Número Sorteado: ${sorteado}`;
    } else {
        if (erros.indexOf(numero) >= 0) {
            alert(`Você já apostou esse número: ${numero}. Tente outro.`);
        } else {
            erros.push(numero);
            var numErros = erros.length;
            var numChances = chances - numErros;
            
            outErros.textContent = `${numErros} (${erros.join(", ")})`
            outChances.textContent = numChances;

            if (numChances == 0) {
                alert("Suas chances acabaram.")
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game Over! Número Sorteado " + sorteado;
            } else {
                var dica = numero < sorteado ? " maior " : " menor ";
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;  
            }
        }
    }
    console.log(sorteado)
    inNumero.value = "";
    inNumero.focus();

}

const jogarNovamente = () => {
    var btJogar = document.getElementById("btJogar");
    location.reload();
}

btJogar.addEventListener("click", jogarNovamente);
btApostar.addEventListener("click", apostarNumero);

