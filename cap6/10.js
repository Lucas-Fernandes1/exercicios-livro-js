const gerarDataEValor = () => {
    var inDataInfracao = document.getElementById("inDataInfracao");
    var inValor = document.getElementById("inValor");
    var outLimite = document.getElementById("outLimite");
    var outValor = document.getElementById("outValor");

    var dataInfracao = inDataInfracao.value;
    var valorInfracao = Number(inValor.value);

    var dataLimite = new Date();
    var hoje = new Date();

    var partesData = dataInfracao.split("-");
    dataLimite.setDate(Number(partesData[2]));
    dataLimite.setMonth(Number(partesData[1]) - 1);
    dataLimite.setFullYear(Number(partesData[0]));
    
    var dia = dataLimite.getDate();
    dataLimite.setDate(dia + 90);

    var mes = dataLimite.getMonth() + 1;
    var ano = dataLimite.getFullYear();

    var comDesconto = valorInfracao * 0.80;

    outValor.textContent = "Data limite para pagamento: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
    outLimite.textContent = "Valor com desconto R$: " + comDesconto.toFixed(2);
}

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarDataEValor);

