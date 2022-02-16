const gerarCracha = () => {
    var inNome = document.getElementById("inNome");
    var outCracha = document.getElementById("outCracha")

    var nome = inNome.value;

    if ( nome == "" ) {
        alert( "Insira um nome para continuar." )
        inNome.focus();
        return;
    }

    var priEspaco = nome.indexOf(" "); //Primeiro espaço;
    var ultEpaco = nome.lastIndexOf(" "); //Último espaço;

    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEpaco);

    outCracha.textContent = "Crachá: " + cracha;

}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);