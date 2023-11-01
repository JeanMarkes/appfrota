function pesquisar() {
    const consulta = document.getElementById("consultaInput").value;
    // Substitua o URL abaixo pelo link de compartilhamento da sua planilha Google
    const url = "URL_DA_SUA_PLANILHA";
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Analise os dados e exiba o resultado na div "resultado"
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = data;
        })
        .catch(error => {
            console.error("Erro ao consultar a planilha: " + error);
        });
}
