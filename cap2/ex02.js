function converterDuracao() {
    let inTitulo = document.getElementById("inTitulo");
    let inDuracao = document.getElementById("inDuracao");
    let outTitulo = document.getElementById("outTitulo");
    let outDuracao = document.getElementById("outDuracao");

    let titulo = inTitulo.value.toUpperCase();
    let duracao = Number(inDuracao.value) ;

    let horas = Math.floor(duracao / 60);
    let minutos = duracao % 60;

    outTitulo.textContent = titulo;
    outDuracao.textContent = `${horas}h:${minutos}m`;
}

let btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterDuracao);