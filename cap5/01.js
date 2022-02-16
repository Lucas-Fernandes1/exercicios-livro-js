var pacientes = [];

const adicionarPacientes = () => {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");
    var btAdicionar = document.getElementById("btAdicionar");
    var btUrgencia = document.getElementById("btUrgencia");
    var btAtender = document.getElementById("btAtender");

    var nome = inPaciente.value;

    if(!nome) {
        alert("Informe o nome do paciente.");
        inPaciente.focus();
        return
    }

    pacientes.push(nome);

    var lista = "";

    for(var i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

const pacientesUrgencia = () => {
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");
    var btAdicionar = document.getElementById("btAdicionar");

    var nome = inPaciente.value;
    var lista = "";

    if(!nome) {
        alert("Informe o nome do paciente.");
        inPaciente.focus();
        return
    }

    pacientes.unshift(nome);

    for(var i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    inPaciente.value = "";
    inPaciente.focus();
}

const atenderPaciente = () => {
    
    if(pacientes.length == 0) { 
        alert("Não há pacientes na lista de espera.");
        inPaciente.focus();
        return;
    }

    
    if(pacientes.length == 0) {
        document.getElementById("btAtender").disabled = true; 
    }


    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    var atender = pacientes.shift();

    outAtendimento.textContent = atender;

    var lista = "";

    for(var i = 0 ; i < pacientes.length ; i++) {
        lista += (i + 1) + ". " +  pacientes[i] + "\n";
    }

    outLista.textContent = lista;
}



const excluirRegistro = () => {

    var removerPaciente = document.getElementById("removerPaciente");
    var lista = "";
    var excluir = pacientes.pop();

    for(var i = 0; i <= pacientes.length; i++) {
        lista += (i + 1) + ". " +  pacientes[i] + "\n";
    }

    outLista.textContent = excluir;

}

btAdicionar.addEventListener("click", adicionarPacientes);
btUrgencia.addEventListener("click", pacientesUrgencia);
btAtender.addEventListener("click", atenderPaciente);
removerPaciente.addEventListener("click", excluirRegistro);