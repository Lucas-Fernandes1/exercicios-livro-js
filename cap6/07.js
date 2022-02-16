const TAXA_MULTA = 2 / 100 //Multa por atraso;
const TAXA_JUROS = 0.33 / 100 //Juros por dia de atraso;

const calculaMultaJuros = () => {
    var inDataVencimento = document.getElementById("inDataVencimento");
    var inValor = document.getElementById("inValor");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");
    var outDias = document.getElementById("outDias")

    var dataVenc = inDataVencimento.value;
    var valor = Number(inValor.value);

    if ( dataVenc == "" || valor == 0 || isNaN(valor) ) {
        alert("Informe os dados corretamente.");
        inDataVencimento.focus;
        return;
    }

    var hoje = new Date();
    var vencimento = new Date();

    var partes = dataVenc.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1]) -1);
    vencimento.setFullYear(Number(partes[0]));

    var atraso = hoje - vencimento;
    var multa = 0;
    var juros = 0;
    
    if ( atraso > 0 ) {
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA;
        juros = valor * TAXA_JUROS * dias;
    } else if (atraso <= 0) {
        dias = alert("Ainda não venceu, efetue o pagamento até o dia: " + vencimento.toDateString("DD/MM/YYYY"));
    }

    var total = valor + multa + juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);
    outDias.value = dias;
       
}

const novaConta = () => {
    location.reload();
}

var btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", novaConta);

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculaMultaJuros);