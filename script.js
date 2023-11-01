function pesquisar() {
    const consulta = document.getElementById("consultaInput").value;
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRjVt_E3urPlxsUzznawEgySBt08oBIfuf_qhgFmiSpx5Xu8FN1EJExvVVnfAv_hx4CBbjpNybR6Ibc/pubhtml?gid=0&single=true";

    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Analise os dados e exiba o resultado na página
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = data;
        })
        .catch(error => {
            console.error("Erro ao consultar a planilha: " + error);
        });
}
