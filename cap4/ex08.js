const inNome = document.getElementById("inNome");
const inRepeat = document.getElementById("inRepeat");
const btnGerar = document.getElementById("btnGerar");
const outResult = document.getElementById("outResult");

const repetirNome = () => {
    let nomeFruta = inNome.value;
    let repeticoes = Number(inRepeat.value);

    let vezes = "";

    for(let i = 0; i <= repeticoes; i++) {
        vezes += ` ${nomeFruta} * `
    }
    outResult.textContent = `${vezes}`
}
btnGerar.addEventListener('click', repetirNome);