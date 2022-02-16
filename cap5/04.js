var criancas = [];

const adicionarCrianca = () => {
    debugger
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    var nome = inNome.value;
    var idade = Number(inIdade.value);

    if (nome == "" || idade == 0 || isNaN(idade)) {
        alert("Preencha os campos corretamente!");
        inNome.focus();
        return;
    }

    criancas.push({nome:nome, idade:idade});

    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarCriancas();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCrianca);

const listarCriancas = () => {
    debugger
    if (criancas.length == 0) {
        alert("Não há crianças para exibição!");
        return;
    }

    var lista = "";

    for (var i = 0; i < criancas.length; i++) {
        debugger
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
    }

    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCriancas);

function resumirIdade() {

    if (criancas.length == 0) {
        alert('Não há crianças na lista !');
        return;
    }
    
    let copia = criancas.slice();

    copia.sort(function (a, b) {
        return a.idade - b.idade
    });

    let resumo = '';

    let menorIdade = copia[0].idade;
    let nomes = [];

    for (let index = 0; index < copia.length; index++) {
        
        if (copia[index].idade == menorIdade) {

            nomes.push(copia[index].nome)

        } else {

            resumo += `${menorIdade} ano(s): ${nomes.length} crianças - `;
            resumo += `${(nomes.length / copia.length * 100).toFixed(2)} % \n`;
            resumo += `(${nomes.join(', ')}) \n\n`;
            menorIdade = copia[index].idade;
            nomes = [];
            nomes.push(copia[index].nome);

        }
    }
    resumo += `${menorIdade} ano(s) ${nomes.length} crianças - `;
    resumo += `${(nomes.length / copia.length * 100).toFixed(2)} % \n`;
    resumo += `(${nomes.join(', ')}) \n \n`;

    outLista.textContent = resumo;
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirIdade);