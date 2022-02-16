const mostrarDados = () => {
    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPrecoProprietario = document.getElementById("inPrecoProprietario");
    var outModelo = document.getElementById("outModelo");
    var outValorVenda = document.getElementById("outValorVenda");

    var modelo = inModelo.value;
    var ano = inAno.value;
    var preco = Number(inPrecoProprietario.value);

    if ( modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco) ) {
        alert("Informe os valores para continuar");
        inModelo.focus();
        return;
    }

    var classificacao = classificarVeiculo(ano);
    var precoVenda = calcularVenda(preco, classificacao);

    outModelo.textContent = modelo + " - " + classificacao;
    outValorVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
}

const classificarVeiculo = (ano) => {
    var anoAtual = new Date().getFullYear();
    var classif = [];

    if ( ano == anoAtual ) {
        classif.push("Novo")
    } else if ( ano == anoAtual - 1 || ano == anoAtual - 2 ) {
        classif.push("Seminovo");
    } else {
        classif.push("Usado");
    }
    return classif;
}

const calcularVenda = (valor, status) => {
    var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10

    return prVenda;
}

var btClassificar = document.getElementById("btClassificar");
btClassificar.addEventListener("click", mostrarDados);