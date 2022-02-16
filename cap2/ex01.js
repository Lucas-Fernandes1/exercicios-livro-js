
function mostrarOla() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").textContent = `Olá, ${nome}!`;
}
let chamar = document.getElementById("mostrar");
chamar.addEventListener("click", mostrarOla)