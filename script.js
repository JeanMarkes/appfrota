function exibirTexto() {
    const consulta = document.getElementById("consultaInput").value;

    if (consulta.trim() === "") {
        alert("Por favor, digite um texto para pesquisar.");
    } else {
        alert("Texto a ser pesquisado: " + consulta);
    }
}
