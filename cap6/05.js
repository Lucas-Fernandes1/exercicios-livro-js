const gerarCracha = () => {
    var inFucionario = document.getElementById("inFuncionario");

    var funcionario = inFucionario.value;

    if ( funcionario == "" || funcionario.indexOf(" ") == -1 ) {
        alert("Verifique o nome digitado.")
        inFucionario.focus();
        return;
    }
		debugger
    var partes = funcionario.split(" ");
    var email = "";
    var tam = partes.length;

    for ( var i = 0 ; i < tam - 1 ; i++ )	{
			email += partes[i].charAt(0);
		}

		email += partes[tam - 1] + "@minhaempresa.com.br"

		outEmail.textContent = `Email: ${email.toLocaleLowerCase()}`;
}

const recarregar = () => {
	debugger
	var verificacao = confirm("Ao recarregar os dados serão perdidos, deseja continuar?")

	if( verificacao == true ) {
		location.reload();
	}
}

var btReload = document.getElementById("btReload");
btReload.addEventListener("click", recarregar);

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);